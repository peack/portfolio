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
      className="flex flex-grow-0 lg:flex-nowrap flex-wrap bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md pl-3 lg:p-8 m-2 mr-7 lg:m-7 font-sans min-w-fit"
    >
      {children}
    </div>
  );
};

export default ContentBoxFlex;
