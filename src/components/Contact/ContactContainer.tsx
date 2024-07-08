import ContentBoxFlex from "../Layout/ContentBoxFlex";
import PropTypes from "prop-types";

interface ContactContainerProps {
  id: string;
}

const ContactContainer: React.FC<ContactContainerProps> = ({
  id,
}): JSX.Element => {
  return (
    <ContentBoxFlex id={id}>
      <span>For any enquiries please contact me at &nbsp;</span>
      <a className="font-[RobotoSlab-Bold]" href="mailto:user@example.com">
        user@example.com
      </a>
    </ContentBoxFlex>
  );
};

ContactContainer.propTypes = {
  id: PropTypes.string.isRequired,
};
export default ContactContainer;
