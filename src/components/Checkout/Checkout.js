import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import "./Checkout.css";

export const Checkout = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [error, setError] = useState("");
  const [idOrder, setIdOrder] = useState("");

  const { cart, removeProduct, totalPrice } = useCartContext();

  const formManager = (event) => {
    event.preventDefault();

    if (!name || !surname || !phoneNumber || !email || !confirmationEmail) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== confirmationEmail) {
      setError("Asegúrese de que los campos de email coincidan");
      return;
    }
    const total = totalPrice();
    const order = {
      items: cart.map((product) => ({
        id: product.id,
        name: product.title,
        qty: product.quantity,
      })),
      total: total,
      fecha: new Date(),
      name,
      surname,
      phoneNumber,
      email,
    };

    Promise.all(
      order.items.map(async (productorder) => {
        const db = getFirestore();
        const productRef = doc(db, "products", productorder.id);

        const productDoc = await getDoc(productRef);
        const currentStock = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: currentStock - productorder.qty,
        });
      })
    )
      .then(() => {
        const db = getFirestore();
        addDoc(collection(db, "orders"), order)
          .then((docRef) => {
            setIdOrder(docRef.id);
            removeProduct();
          })
          .catch((error) => {
            console.log("Error en creación de orden", error);
            setError("Error en orden");
          });
      })
      .catch((error) => {
        console.log("No se puede actualizar el stock", error);
        setError("No se actualizó el stock");
      });

    setName("");
    setSurname("");
    setPhoneNumber("");
    setEmail("");
    setConfirmationEmail("");
  };

  return (
    <>
      <h2 className="formTitle">
        Complete el siguiente formulario. ¡Próximamente nos contactaremos para
        enviarle sus productos!
      </h2>

      <form onSubmit={formManager}>
        <div>
          <label className="formField">Nombre:</label>
          <input
            className="formInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="formField">Apellido:</label>
          <input
            className="formInput"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <div>
          <label className="formField">Número de celular:</label>
          <input
            className="formInput"
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div>
          <label className="formField">Email:</label>
          <input
            className="formInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="formField">Confirmar Email:</label>
          <input
            className="formInput"
            type="email"
            value={confirmationEmail}
            onChange={(e) => setConfirmationEmail(e.target.value)}
          />
        </div>

        {error && <p>{error}</p>}

        {idOrder && (
          <p className="idOrderTxt">
            ¡Gracias por tu compra! <br /> Este es su numero de orden: <br />{" "}
            {idOrder}{" "}
          </p>
        )}
        <div className="formBtns">
          <div>
            <button className="formBtn" type="submit">
              Finalizar Compra
            </button>
          </div>
          <div>
            <Link to="/">
              <button className="formBtn">Volver al Home</button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Checkout;
