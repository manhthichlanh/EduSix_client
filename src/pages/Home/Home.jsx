import Star from "../../components/commom/icons/Star";
import StarHalf from "../../components/commom/icons/StarHalf";
import StarFill from "../../components/commom/icons/StarFill";
import VideoPlay from "../../components/commom/icons/VideoPlay";
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex items-center justify-center">
        <Star height="40" width={40}></Star>
        <StarHalf height={30} width={30}></StarHalf>
        <StarFill height={50} width={50}></StarFill>
        <VideoPlay width={40} height={40}></VideoPlay>
      </div>
    </>
  );
}
