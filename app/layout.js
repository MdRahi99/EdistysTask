import Navbar from "@/components/shared/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer/Footer";

export const metadata = {
  title: "Anytech Live",
  description: "Anytech Live",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="max-w-[2000px] mx-auto">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
