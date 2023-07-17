import logo from "../../assets/Checkmark.png"

const RegisterCompleted = (prop) => {
    return (
        <div className="  flex flex-col justify-center items-center rounded-2xl ml-[148px] mr-[213px] bg-[#CBC9C9]">
            <p className="text-[#0D1F13] text-[30px]">{prop.message}</p>
            <img src={logo} alt="" />
        </div>
    )
}
export default RegisterCompleted