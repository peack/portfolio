import ContentBoxFlex from "../Layout/ContentBoxFlex";
import ContactForm from "./ContactForm.tsx";
import PropTypes from "prop-types";

interface ContactContainerProps {
  id: string;
}

const ContactContainer: React.FC<ContactContainerProps> = ({
  id,
}): JSX.Element => {
  return (
    <ContentBoxFlex>
      <ContactForm id={id} />
    </ContentBoxFlex>
  );
};

ContactContainer.propTypes = {
  id: PropTypes.string.isRequired,
};
export default ContactContainer;
