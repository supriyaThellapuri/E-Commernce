import { useTranslation } from "react-i18next";
import s from "./CopyRightsText.module.scss";

const CopyRightsText = () => {
  const developerProfile = "https://www.linkedin.com/in/supriya-thellapuri-262020218/";
 
  const copyRightTrans = "footer.copyRightsText";
  const { t } = useTranslation();

  return (
    <p className={s.copyRights}>
      <span>{t(`${copyRightTrans}.designedBy`)} Supriya </span>
      

      <span>{t(`${copyRightTrans}.codedBy`)}</span>
      <a href={developerProfile} target="_blank">
        Supriya Thellapuri
      </a>
    </p>
  );
};
export default CopyRightsText;
