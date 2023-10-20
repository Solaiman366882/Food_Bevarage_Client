import errImg from '../../assets/images/error.png'
const Error = () => {
    return (
        <div className="min-h-[70vh] w-full flex justify-center items-center py-24 flex-col">
            <img src={errImg} alt="" />
            <h1 className="text-5xl font-bold text-[#f7a392] mt-10">Page Not Found</h1>
        </div>
    );
};

export default Error;