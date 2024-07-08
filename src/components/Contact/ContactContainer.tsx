import PropTypes from "prop-types";
import ContentBoxGrid from "../Layout/ContentBoxGrid";

interface ContactContainerProps {
  id: string;
}

const ContactContainer: React.FC<ContactContainerProps> = ({
  id,
}): JSX.Element => {
  return (
    <ContentBoxGrid id={id} gridCol={1} gridRow={2}>
      <span className="col-auto text-xl font-[RobotoSlab-Bold]">Contact</span>{" "}
      <br />
      <div className="col-span-3 ">
        <span>For any enquiries please contact me at &nbsp;</span>
        <a className="font-[RobotoSlab-Bold]" href="mailto:user@example.com">
          user@example.com
        </a>
      </div>
    </ContentBoxGrid>
  );
};

ContactContainer.propTypes = {
  id: PropTypes.string.isRequired,
};
export default ContactContainer;
