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
      className="flex lg:flex-nowrap flex-wrap bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md p-8 m-7 overflow-auto"
    >
      {children}
    </div>
  );
};

export default ContentBoxFlex;
