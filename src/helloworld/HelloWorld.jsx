

export default function HelloWorld(){
return (
    <div>
        <HeaderHelloWorld/>
        <ParagraphHelloWorld/>
    <h1>Hello World</h1>
    <p>Selamat Belajar JSX</p>
    </div>
)

}

function HeaderHelloWorld(){
    const text = "Hello World"
    return(
       
        <h1 style={{
            color: "aqua",
            backgroundColor : "red"
        }}>{text.toUpperCase()}</h1>
       
    )
}
function ParagraphHelloWorld(){
const text = "Selamat Belajar JSX Di Programmer Zaman Now"
const style = {
    color : "blue",
    backgroundColor : "yellow"
};

    return(
        <p style={style}>{text.toLowerCase()    }</p>
    )
}