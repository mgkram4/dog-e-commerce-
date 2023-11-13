import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/user";
import CartProvider from "./context/cart";

export const metadata = {
  title: "Dog",
  description: "Dog Toys",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <UserProvider>
          <CartProvider>{children}</CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
