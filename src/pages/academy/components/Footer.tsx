import { InlineIcon } from "@iconify/react/dist/iconify.js";

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="p-8 md:p-20 bg-academyBg gap-y-12 md:gap-y-20 min-h-full flex flex-col justify-start items-start">
        <div className="flex flex-col w-full md:flex-row gap-4 justify-between items-center md:items-start">
            <h4 className="font-bold text-4xl">ACA</h4>
            <div className="flex flex-col">
                <p className="text-textGrey mb-3">MENU</p>
                <p>About</p>
                <p>Pricing</p>
                <p>Blog</p>
                <p>Content</p>
            </div>
            <div className="flex flex-col">
                <p className="text-textGrey mb-3">SERVICE</p>
                <p>Learning</p>
                <p>Schedules</p>
                <p>Communities</p>
                <p>All Services</p>
            </div>
            <div className="flex flex-row gap-3 ">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-academyPrimary">
                    <InlineIcon className="text-white" icon="jam:facebook"/>
                </div>
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-academyPrimary">
                    <InlineIcon className="text-white" icon="uil:twitter"/>
                </div>
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-academyPrimary">
                    <InlineIcon className="text-white" icon="cib:instagram"/>
                </div>
            </div>
        </div>
        <hr className="border-2 w-full" />
        <div className="flex flex-col w-full items-center md:flex-row gap-4 justify-between">
            <div className="flex flex-col md:flex-row gap-2 items-center">
                <p className="text-textGrey">
                    Copyright {`\u00A9`+currentYear} | Genics85
                </p>
                <p className="text-textGrey">All Rights Reserved</p>
            </div>
            <div className="flex justify-between md:justify-end gap-4 w-full md:w-1/2">
                <p className="font-bold">Term of Use</p>
                <p className="font-bold">Privacy Policy</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
