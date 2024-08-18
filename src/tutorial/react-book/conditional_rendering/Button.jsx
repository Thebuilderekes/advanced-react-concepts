




export default function Button({children}) {

const isButton = false;


const Tag = isButton ? 'button' : 'a';

const config = !isButton ? { href : "/"} : "";

return <Tag {...config}>{children}</Tag>;
};


