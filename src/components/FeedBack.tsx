interface IFeedBackProps{
  message: string;
}

export function FeedBack({message}: IFeedBackProps) {
  return (
    <div className="h-[100vh] flex items-center justify-center ">
      <h2 className="text-white text-xl">
        {message && message}
      </h2>
    </div>
  );
}
