import { Poppins, Inter, Ubuntu } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
});

export const inter = Inter({ subsets: ["latin"] });

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
