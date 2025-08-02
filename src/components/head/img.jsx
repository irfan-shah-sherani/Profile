import Photo from '../../assets/IMG_953222.JPG';

export default function Img() {
    return (
        <div>
            <div className="flex justify-center">
                <div className="w-90 h-90 p-4  rounded-full border-5 border-blue-500">
                    <img src={Photo} alt="Logo" className="w-full h-full object-cover rounded-full" />
                </div>
            </div>
        </div>
    )
}