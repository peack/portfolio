interface ContentBoxFlexProps {
  children: React.ReactNode;
  id?: string;
}

const ContentBoxFlex: React.FC<ContentBoxFlexProps> = ({
  children,
  id,
}: ContentBoxFlexProps) => {
  return (
    <div
      id={id}
      className="flex grow-0 lg:flex-nowrap flex-wrap
      bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-xl 
      pl-0  lg:p-5 lg:px-12 m-2 mr-7 lg:m-7 
      -pr-5 font-sans min-w-fit max-h-fit "
    >
      {children}
    </div>
  );
};

export default ContentBoxFlex;
