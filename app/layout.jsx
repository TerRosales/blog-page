import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse",
  keywords: "real estate, property, buy, sell, rent",
  description: "Property Pulse is a real estate platform",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
