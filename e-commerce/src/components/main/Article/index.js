import Card from "../Card/card";
import Categoria from "../Categorias/index"

export default function Article() {
  const estilo = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "36px",
    letterSpacing: "1px",
  };
  const estilo2 = {
    textAlign: "center",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "36px",
    letterSpacing: "1px",
  };

  const camisa = (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_309_862)">
        {" "}
        <path
          d="M16.875 2.61249C13.0625 4.03749 9.625 5.36249 9.25 5.56249C8.2375 6.07499 7.125 7.24999 6.6 8.37499C6.0125 9.61249 0 27.7125 0 28.25C0 29.375 0.9375 30.7125 1.9375 30.9875C2.2 31.05 4.7875 31.3 7.7 31.5125L13 31.925V46.125C13 58.5375 13.025 60.35 13.1875 60.5875C13.575 61.1375 18.5625 62.5625 22.2875 63.175C25.925 63.7875 27.7625 63.925 32.0625 63.925C36.3625 63.925 38.3875 63.7625 41.875 63.175C45.5 62.5625 50.4375 61.125 50.8125 60.5875C50.975 60.35 51 58.625 51 46.125V31.9375L56.2875 31.525C59.1875 31.3 61.7875 31.0625 62.0625 30.9875C63.0625 30.7125 64 29.3875 64 28.2375C64 28.0125 62.5625 23.5125 60.8125 18.25C58.4625 11.2125 57.5 8.47499 57.15 7.88749C56.5875 6.93749 55.5875 5.98749 54.6375 5.51249C54.25 5.31249 50.8375 3.99999 47.05 2.57499L40.175 -7.62939e-06H31.9875H23.8125L16.875 2.61249ZM38.875 2.24999C38.875 2.61249 38.3375 4.01249 37.95 4.68749C37.125 6.09999 35.2875 7.41249 33.6125 7.81249C31.3 8.34999 28.8125 7.66249 27.125 5.98749C26.3 5.17499 25.8375 4.43749 25.4125 3.28749C24.8875 1.84999 24.1125 1.99999 32 1.99999C38.7375 1.99999 38.875 1.99999 38.875 2.24999ZM23.3 3.24999C23.4125 3.69999 23.7375 4.53749 24.025 5.12499C24.45 5.97499 24.775 6.39999 25.625 7.24999C26.825 8.44999 27.85 9.09999 29.3125 9.58749C30.2 9.88749 30.5 9.92499 32 9.92499C33.5 9.92499 33.8 9.88749 34.6875 9.58749C36.15 9.09999 37.175 8.44999 38.375 7.24999C39.225 6.39999 39.55 5.97499 39.975 5.12499C40.2625 4.53749 40.5875 3.68749 40.7 3.23749L40.9 2.41249L41.8 2.74999C42.3125 2.94999 42.7 3.17499 42.725 3.28749C42.8 3.64999 42.025 5.63749 41.4125 6.64999C38.6125 11.3375 32.6625 13.2625 27.6625 11.1C24.8625 9.87499 22.6 7.43749 21.6 4.56249C21.4 3.97499 21.25 3.39999 21.275 3.28749C21.3 3.17499 21.675 2.94999 22.1875 2.74999C22.675 2.56249 23.075 2.42499 23.075 2.42499C23.0875 2.43749 23.1875 2.79999 23.3 3.24999ZM19.6 4.84999C20.8 8.81249 23.9 11.975 27.8875 13.3C29.5875 13.8625 30.9375 14.05 32.675 13.9625C35.05 13.8375 37.225 13.125 39.175 11.825C41.6375 10.1875 43.525 7.67499 44.3875 4.87499C44.55 4.36249 44.6875 3.91249 44.7 3.89999C44.7625 3.81249 53.575 7.17499 54 7.43749C54.5625 7.78749 55.3 8.61249 55.6 9.21249C55.7375 9.47499 57.2375 13.8625 58.9375 18.975C61.0875 25.425 62 28.35 61.95 28.5625C61.9125 28.725 61.7625 28.925 61.6375 29C61.425 29.1 52.45 29.875 51.375 29.875H51V26.25V22.6125L50.6875 22.3125C50.2875 21.9 49.7125 21.9 49.3125 22.3125L49 22.6125V40.975V59.3375L47.725 59.725C44.625 60.675 41.5 61.3 37.85 61.7125C35.175 62.0125 28.825 62.0125 26.15 61.7125C22.525 61.3 19.6875 60.7375 16.5375 59.8L15 59.3375V40.975V22.6125L14.675 22.2875C14.4125 22.025 14.275 21.9875 13.9 22.05C13 22.1875 13 22.2125 13 26.2625V29.875H12.6625C11.6125 29.875 2.5625 29.1 2.3625 29C2.2375 28.925 2.0875 28.725 2.05 28.5625C2 28.35 2.9125 25.425 5.0625 18.975C6.7625 13.8625 8.2625 9.47499 8.4 9.21249C8.7375 8.53749 9.575 7.64999 10.1875 7.33749C10.6875 7.07499 18.95 3.91249 19.1875 3.88749C19.2625 3.88749 19.45 4.31249 19.6 4.84999Z"
          fill="#C92071"
        />
      </g>{" "}
      <defs>
        {" "}
        <clipPath id="clip0_309_862">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const calca = (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        d="M20.3125 0.149998C19.7875 0.450001 19.7625 0.612499 19.75 2.9125V5.125L13.3625 32.25C9.41247 49.075 6.99997 59.55 7.02497 59.8375C7.04997 60.15 7.16247 60.3625 7.37497 60.525C7.69997 60.7625 18.2875 64 18.7375 64C18.875 64 19.125 63.875 19.3 63.7125C19.525 63.525 21.775 58.3875 27.075 46C31.1875 36.4125 34.575 28.525 34.6125 28.475C34.6875 28.3875 39.375 39.175 39.375 39.4125C39.375 39.4625 38.225 39.5 36.8125 39.5C34.25 39.5 34.2375 39.5 33.9375 39.8125L33.625 40.1125V45.3V50.4875L33.9125 50.8125C34.1625 51.1 34.625 51.2125 39.7875 52.25C43.6875 53.025 45.4625 53.3375 45.6625 53.2625C45.8125 53.2 48.3875 50.95 51.375 48.2625C55.8 44.2875 56.8375 43.2875 56.975 42.9125C57.1 42.5625 57.125 41.8375 57.1 40.25L57.05 38.0625L53.375 21.9375L49.7 5.8125L49.6375 3.2125L49.5625 0.599998L49.2125 0.299999L48.8625 0H34.7125C24.3 0.0125008 20.5 0.0499992 20.3125 0.149998ZM26.125 3.1875V4.25H24H21.875V3.1875V2.125H24H26.125V3.1875ZM31.5 3.1875V4.25H29.875H28.25V3.1875V2.125H29.875H31.5V3.1875ZM35.75 3.1875V4.25H34.6875H33.625V3.1875V2.125H34.6875H35.75V3.1875ZM41.1 3.2125L41.1375 4.25H39.5H37.875V3.1875V2.1125L39.475 2.15L41.0625 2.1875L41.1 3.2125ZM47.5 3.1875V4.25H45.375H43.25V3.1875V2.125H45.375H47.5V3.1875ZM26.125 7.775C26.125 9.4375 25.875 10.1375 25.025 10.9C24.3125 11.5375 23.5125 11.75 21.7875 11.75C20.4875 11.75 20.3625 11.725 20.425 11.525C20.5 11.3 21.625 6.5 21.625 6.425C21.625 6.4 22.6375 6.375 23.875 6.375H26.125V7.775ZM33.625 15.8375V25.3125L25.8625 43.4375C21.5875 53.4 18.0875 61.575 18.075 61.5875C18.0375 61.6375 9.59997 59.125 9.42497 59.0125C9.32497 58.9625 10.9625 51.8 14.575 36.4375C17.4875 24.0625 19.875 13.925 19.875 13.9C19.875 13.8875 20.625 13.875 21.55 13.875C24.225 13.875 25.3125 13.55 26.575 12.35C27.8 11.1875 28.25 9.95 28.25 7.6875V6.375H30.9375H33.625V15.8375ZM37.875 14.6625V22.95L37.225 23.4375C36.8625 23.7 36.375 24.05 36.1625 24.225L35.75 24.525V15.45V6.375H36.8125H37.875V14.6625ZM41.1375 8.125C41.225 10.0625 41.325 10.4625 42 11.4625C42.5625 12.3125 43.2375 12.9 44.1625 13.325C45.1 13.75 45.925 13.875 47.7625 13.875C49.325 13.875 49.375 13.8875 49.4375 14.15C50.875 20.25 54.875 38.425 54.875 38.875V39.5H48.325H41.775L39.075 33.2C37.5875 29.7375 36.375 26.85 36.375 26.7875C36.3875 26.7375 37.1125 26.15 37.9875 25.5C38.875 24.85 39.6875 24.1625 39.8 23.975C39.975 23.6875 40 22.6875 40 15V6.3625L40.5375 6.4L41.0625 6.4375L41.1375 8.125ZM48.275 9C48.6 10.4125 48.8625 11.6125 48.8625 11.675C48.875 11.725 48.125 11.7625 47.225 11.725C45.675 11.6875 45.5125 11.65 44.9 11.325C43.625 10.625 43.25 9.825 43.25 7.8125V6.375L45.4625 6.4L47.6875 6.4375L48.275 9ZM54.875 41.9375C54.875 42.1875 53.9125 43.1125 49.95 46.6875L45.025 51.125L40.6625 50.25C38.275 49.775 36.1875 49.35 36.0375 49.3125L35.75 49.25V45.4375V41.625H45.3125H54.875V41.9375Z"
        fill="#8F8F8F"
      />{" "}
    </svg>
  );

  const headphone = (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <mask
        id="path-1-outside-1_309_922"
        maskUnits="userSpaceOnUse"
        x="-0.186035"
        y="1.75"
        width="61"
        height="61"
        fill="black"
      >
        {" "}
        <rect fill="white" x="-0.186035" y="1.75" width="61" height="61" />{" "}
        <path d="M27.1365 2.50971C20.4765 3.3702 14.7347 6.19587 10.1436 10.8937C8.69076 12.3705 7.91202 13.3356 6.77297 15.0682C5.14575 17.5102 3.85559 20.4405 3.13496 23.3243C2.48408 25.9174 2.33298 27.2779 2.3446 30.4176C2.3446 32.8595 2.61193 37.5341 2.7979 38.5573C2.85601 38.8713 2.82114 38.9294 2.47245 39.1039C1.85643 39.3946 1.40314 39.8248 1.12418 40.4062C0.577901 41.4877 0.577901 41.4412 2.58868 50.3833C4.65758 59.6045 4.58784 59.4068 5.73852 60.0929C6.62187 60.6278 7.16815 60.6743 8.64427 60.372C9.57411 60.1743 9.87631 60.1394 9.9228 60.2557C10.0274 60.5697 10.7945 61.2906 11.2595 61.5115C11.9917 61.872 13.0261 61.8255 15.1183 61.3604C17.1291 60.9069 17.3964 60.7906 18.0008 60.1278C18.5819 59.4882 18.7795 58.9766 18.7795 58.1742C18.7795 57.3137 14.2349 36.9759 13.8979 36.3131C13.5608 35.6619 12.7937 35.034 12.0266 34.813C11.457 34.6502 11.2943 34.6502 10.4923 34.8014L9.60898 34.9642L9.50438 33.8595C9.33003 31.8013 9.39977 27.5105 9.62061 26.3244C10.7597 20.2428 14.3047 15.1729 19.6164 11.9868C23.2312 9.82389 27.8106 8.75409 32.0414 9.07969C39.7591 9.6611 46.4191 14.1147 49.6851 20.8824C51.3937 24.4174 51.9051 27.3477 51.661 32.1618C51.5913 33.627 51.5099 34.8596 51.4867 34.9061C51.4518 34.941 51.0334 34.8944 50.5336 34.8014C49.72 34.6502 49.5689 34.6502 48.9878 34.813C48.2206 35.034 47.4535 35.6619 47.1164 36.3131C46.7794 36.9759 42.2348 57.3137 42.2348 58.1742C42.2348 58.9417 42.4324 59.465 42.9322 60.0464C43.5366 60.7208 43.9782 60.9185 45.8844 61.3487C48.023 61.8255 49.0226 61.872 49.7549 61.5115C50.2198 61.2906 50.9869 60.5697 51.0915 60.2557C51.138 60.1394 51.4402 60.1743 52.37 60.372C53.8462 60.6743 54.3925 60.6278 55.2758 60.0929C56.4149 59.4068 56.3684 59.5812 58.3791 50.674C60.3783 41.8016 60.4364 41.4412 59.9018 40.4179C59.6344 39.9062 59.1114 39.3946 58.4605 39.0225C58.2862 38.9178 58.2745 38.7899 58.3908 37.6271C58.8441 32.906 58.8557 27.8826 58.4024 25.3593C56.5543 14.9054 48.8367 6.41681 38.4689 3.41672C35.9467 2.69576 34.0638 2.42831 31.0302 2.3818C29.2402 2.35854 27.9617 2.39343 27.1365 2.50971ZM33.9592 4.02139C44.1991 5.35864 52.6722 12.1844 55.9267 21.6964C57.3098 25.7895 57.5655 29.3012 56.996 36.5224C56.8333 38.6039 56.8333 38.6039 56.3451 38.4759C56.0197 38.3945 55.9616 38.3248 55.9616 38.0341C55.9616 37.0922 54.9271 35.8596 53.8578 35.5456C53.5207 35.441 53.172 35.3596 53.0907 35.3596C52.9628 35.3596 52.9396 35.2084 52.9861 34.6851C53.1488 32.906 53.1837 32.2199 53.172 30.0687C53.172 28.5803 53.1139 27.3244 52.9977 26.5919C52.4514 23.022 51.0334 19.58 48.9064 16.6962C47.8719 15.3008 45.3497 12.8124 43.9899 11.8472C40.8749 9.63784 37.4461 8.26571 33.7267 7.74244C32.146 7.5215 28.9962 7.5215 27.3573 7.75406C17.8962 9.06806 10.1669 16.2194 8.31883 25.3244C7.81904 27.7663 7.76092 29.4989 8.03988 34.1037C8.09799 35.1619 8.08637 35.3596 7.93527 35.3596C7.84228 35.3596 7.50522 35.441 7.17977 35.534C6.12208 35.848 5.05276 37.0922 5.05276 38.0224C5.05276 38.3597 4.89004 38.4992 4.48323 38.4992C4.30889 38.4992 4.2624 38.3597 4.20428 37.7782C3.97182 35.4526 3.85559 32.9874 3.84397 30.4176C3.83234 27.2082 3.9602 26.1267 4.61109 23.5569C6.77297 15.1148 13.3748 8.06802 21.8015 5.24236C23.6496 4.62606 26.0207 4.10278 27.8339 3.92836C29.0543 3.80045 32.7155 3.85859 33.9592 4.02139ZM11.9917 36.4061C12.2009 36.5224 12.445 36.7433 12.538 36.8945C12.631 37.0457 13.7584 41.9063 15.0602 47.6972L17.408 58.2324L17.1872 58.6742C17.071 58.9184 16.8385 59.2208 16.6758 59.3371C16.269 59.6278 12.7821 60.3952 12.2823 60.3022C12.0731 60.2673 11.736 60.0929 11.5384 59.9068C11.1316 59.5464 11.3757 60.558 8.13286 45.9878L6.41265 38.2899L6.63349 37.848C6.76134 37.6038 6.98218 37.3131 7.1449 37.1968C7.43548 36.9875 10.6318 36.1968 11.2711 36.1852C11.4687 36.1735 11.7825 36.2782 11.9917 36.4061ZM51.754 36.5805C52.7536 36.8015 53.7067 37.0806 53.8694 37.1968C54.0321 37.3131 54.253 37.6038 54.3808 37.848L54.6017 38.2899L52.8931 45.9297C49.5457 60.9418 49.8827 59.5464 49.4759 59.9068C49.2783 60.0813 48.9413 60.2673 48.732 60.3022C48.2323 60.3952 44.7453 59.6278 44.3385 59.3371C44.1758 59.2208 43.9434 58.9184 43.8271 58.6742L43.6063 58.2324L45.9541 47.6972C47.2559 41.9063 48.3834 37.0457 48.4763 36.8945C48.6972 36.5573 49.3132 36.1735 49.6619 36.1735C49.813 36.1735 50.7544 36.3596 51.754 36.5805ZM5.32009 40.2086C5.35496 40.3946 6.2848 44.5343 7.37736 49.4298C8.46993 54.3253 9.37652 58.4068 9.38815 58.4998C9.41139 58.6742 8.12124 59.058 7.40061 59.0696C6.8892 59.0812 6.2848 58.7905 6.04072 58.4184C5.8315 58.1045 2.26324 42.3482 2.26324 41.7435C2.26324 41.29 2.62355 40.6853 3.00711 40.4876C3.25119 40.3481 4.76219 39.9411 5.1225 39.9062C5.19224 39.8946 5.28522 40.0341 5.32009 40.2086ZM56.8682 40.1272C57.4028 40.2551 57.9491 40.4411 58.0769 40.5341C58.4605 40.79 58.7511 41.3132 58.7511 41.7319C58.7511 42.3249 55.1828 58.1045 54.9736 58.4184C54.7295 58.7905 54.1251 59.0812 53.6137 59.0696C52.8931 59.058 51.6029 58.6742 51.6262 58.4998C51.6378 58.4068 52.5444 54.3253 53.637 49.4298C54.7295 44.5343 55.6594 40.3946 55.6942 40.2086C55.7291 40.0341 55.7872 39.8946 55.8337 39.8946C55.8686 39.8946 56.3451 39.9992 56.8682 40.1272Z" />{" "}
      </mask>{" "}
      <path
        d="M27.1365 2.50971C20.4765 3.3702 14.7347 6.19587 10.1436 10.8937C8.69076 12.3705 7.91202 13.3356 6.77297 15.0682C5.14575 17.5102 3.85559 20.4405 3.13496 23.3243C2.48408 25.9174 2.33298 27.2779 2.3446 30.4176C2.3446 32.8595 2.61193 37.5341 2.7979 38.5573C2.85601 38.8713 2.82114 38.9294 2.47245 39.1039C1.85643 39.3946 1.40314 39.8248 1.12418 40.4062C0.577901 41.4877 0.577901 41.4412 2.58868 50.3833C4.65758 59.6045 4.58784 59.4068 5.73852 60.0929C6.62187 60.6278 7.16815 60.6743 8.64427 60.372C9.57411 60.1743 9.87631 60.1394 9.9228 60.2557C10.0274 60.5697 10.7945 61.2906 11.2595 61.5115C11.9917 61.872 13.0261 61.8255 15.1183 61.3604C17.1291 60.9069 17.3964 60.7906 18.0008 60.1278C18.5819 59.4882 18.7795 58.9766 18.7795 58.1742C18.7795 57.3137 14.2349 36.9759 13.8979 36.3131C13.5608 35.6619 12.7937 35.034 12.0266 34.813C11.457 34.6502 11.2943 34.6502 10.4923 34.8014L9.60898 34.9642L9.50438 33.8595C9.33003 31.8013 9.39977 27.5105 9.62061 26.3244C10.7597 20.2428 14.3047 15.1729 19.6164 11.9868C23.2312 9.82389 27.8106 8.75409 32.0414 9.07969C39.7591 9.6611 46.4191 14.1147 49.6851 20.8824C51.3937 24.4174 51.9051 27.3477 51.661 32.1618C51.5913 33.627 51.5099 34.8596 51.4867 34.9061C51.4518 34.941 51.0334 34.8944 50.5336 34.8014C49.72 34.6502 49.5689 34.6502 48.9878 34.813C48.2206 35.034 47.4535 35.6619 47.1164 36.3131C46.7794 36.9759 42.2348 57.3137 42.2348 58.1742C42.2348 58.9417 42.4324 59.465 42.9322 60.0464C43.5366 60.7208 43.9782 60.9185 45.8844 61.3487C48.023 61.8255 49.0226 61.872 49.7549 61.5115C50.2198 61.2906 50.9869 60.5697 51.0915 60.2557C51.138 60.1394 51.4402 60.1743 52.37 60.372C53.8462 60.6743 54.3925 60.6278 55.2758 60.0929C56.4149 59.4068 56.3684 59.5812 58.3791 50.674C60.3783 41.8016 60.4364 41.4412 59.9018 40.4179C59.6344 39.9062 59.1114 39.3946 58.4605 39.0225C58.2862 38.9178 58.2745 38.7899 58.3908 37.6271C58.8441 32.906 58.8557 27.8826 58.4024 25.3593C56.5543 14.9054 48.8367 6.41681 38.4689 3.41672C35.9467 2.69576 34.0638 2.42831 31.0302 2.3818C29.2402 2.35854 27.9617 2.39343 27.1365 2.50971ZM33.9592 4.02139C44.1991 5.35864 52.6722 12.1844 55.9267 21.6964C57.3098 25.7895 57.5655 29.3012 56.996 36.5224C56.8333 38.6039 56.8333 38.6039 56.3451 38.4759C56.0197 38.3945 55.9616 38.3248 55.9616 38.0341C55.9616 37.0922 54.9271 35.8596 53.8578 35.5456C53.5207 35.441 53.172 35.3596 53.0907 35.3596C52.9628 35.3596 52.9396 35.2084 52.9861 34.6851C53.1488 32.906 53.1837 32.2199 53.172 30.0687C53.172 28.5803 53.1139 27.3244 52.9977 26.5919C52.4514 23.022 51.0334 19.58 48.9064 16.6962C47.8719 15.3008 45.3497 12.8124 43.9899 11.8472C40.8749 9.63784 37.4461 8.26571 33.7267 7.74244C32.146 7.5215 28.9962 7.5215 27.3573 7.75406C17.8962 9.06806 10.1669 16.2194 8.31883 25.3244C7.81904 27.7663 7.76092 29.4989 8.03988 34.1037C8.09799 35.1619 8.08637 35.3596 7.93527 35.3596C7.84228 35.3596 7.50522 35.441 7.17977 35.534C6.12208 35.848 5.05276 37.0922 5.05276 38.0224C5.05276 38.3597 4.89004 38.4992 4.48323 38.4992C4.30889 38.4992 4.2624 38.3597 4.20428 37.7782C3.97182 35.4526 3.85559 32.9874 3.84397 30.4176C3.83234 27.2082 3.9602 26.1267 4.61109 23.5569C6.77297 15.1148 13.3748 8.06802 21.8015 5.24236C23.6496 4.62606 26.0207 4.10278 27.8339 3.92836C29.0543 3.80045 32.7155 3.85859 33.9592 4.02139ZM11.9917 36.4061C12.2009 36.5224 12.445 36.7433 12.538 36.8945C12.631 37.0457 13.7584 41.9063 15.0602 47.6972L17.408 58.2324L17.1872 58.6742C17.071 58.9184 16.8385 59.2208 16.6758 59.3371C16.269 59.6278 12.7821 60.3952 12.2823 60.3022C12.0731 60.2673 11.736 60.0929 11.5384 59.9068C11.1316 59.5464 11.3757 60.558 8.13286 45.9878L6.41265 38.2899L6.63349 37.848C6.76134 37.6038 6.98218 37.3131 7.1449 37.1968C7.43548 36.9875 10.6318 36.1968 11.2711 36.1852C11.4687 36.1735 11.7825 36.2782 11.9917 36.4061ZM51.754 36.5805C52.7536 36.8015 53.7067 37.0806 53.8694 37.1968C54.0321 37.3131 54.253 37.6038 54.3808 37.848L54.6017 38.2899L52.8931 45.9297C49.5457 60.9418 49.8827 59.5464 49.4759 59.9068C49.2783 60.0813 48.9413 60.2673 48.732 60.3022C48.2323 60.3952 44.7453 59.6278 44.3385 59.3371C44.1758 59.2208 43.9434 58.9184 43.8271 58.6742L43.6063 58.2324L45.9541 47.6972C47.2559 41.9063 48.3834 37.0457 48.4763 36.8945C48.6972 36.5573 49.3132 36.1735 49.6619 36.1735C49.813 36.1735 50.7544 36.3596 51.754 36.5805ZM5.32009 40.2086C5.35496 40.3946 6.2848 44.5343 7.37736 49.4298C8.46993 54.3253 9.37652 58.4068 9.38815 58.4998C9.41139 58.6742 8.12124 59.058 7.40061 59.0696C6.8892 59.0812 6.2848 58.7905 6.04072 58.4184C5.8315 58.1045 2.26324 42.3482 2.26324 41.7435C2.26324 41.29 2.62355 40.6853 3.00711 40.4876C3.25119 40.3481 4.76219 39.9411 5.1225 39.9062C5.19224 39.8946 5.28522 40.0341 5.32009 40.2086ZM56.8682 40.1272C57.4028 40.2551 57.9491 40.4411 58.0769 40.5341C58.4605 40.79 58.7511 41.3132 58.7511 41.7319C58.7511 42.3249 55.1828 58.1045 54.9736 58.4184C54.7295 58.7905 54.1251 59.0812 53.6137 59.0696C52.8931 59.058 51.6029 58.6742 51.6262 58.4998C51.6378 58.4068 52.5444 54.3253 53.637 49.4298C54.7295 44.5343 55.6594 40.3946 55.6942 40.2086C55.7291 40.0341 55.7872 39.8946 55.8337 39.8946C55.8686 39.8946 56.3451 39.9992 56.8682 40.1272Z"
        fill="#8F8F8F"
      />{" "}
      <path
        d="M27.1365 2.50971C20.4765 3.3702 14.7347 6.19587 10.1436 10.8937C8.69076 12.3705 7.91202 13.3356 6.77297 15.0682C5.14575 17.5102 3.85559 20.4405 3.13496 23.3243C2.48408 25.9174 2.33298 27.2779 2.3446 30.4176C2.3446 32.8595 2.61193 37.5341 2.7979 38.5573C2.85601 38.8713 2.82114 38.9294 2.47245 39.1039C1.85643 39.3946 1.40314 39.8248 1.12418 40.4062C0.577901 41.4877 0.577901 41.4412 2.58868 50.3833C4.65758 59.6045 4.58784 59.4068 5.73852 60.0929C6.62187 60.6278 7.16815 60.6743 8.64427 60.372C9.57411 60.1743 9.87631 60.1394 9.9228 60.2557C10.0274 60.5697 10.7945 61.2906 11.2595 61.5115C11.9917 61.872 13.0261 61.8255 15.1183 61.3604C17.1291 60.9069 17.3964 60.7906 18.0008 60.1278C18.5819 59.4882 18.7795 58.9766 18.7795 58.1742C18.7795 57.3137 14.2349 36.9759 13.8979 36.3131C13.5608 35.6619 12.7937 35.034 12.0266 34.813C11.457 34.6502 11.2943 34.6502 10.4923 34.8014L9.60898 34.9642L9.50438 33.8595C9.33003 31.8013 9.39977 27.5105 9.62061 26.3244C10.7597 20.2428 14.3047 15.1729 19.6164 11.9868C23.2312 9.82389 27.8106 8.75409 32.0414 9.07969C39.7591 9.6611 46.4191 14.1147 49.6851 20.8824C51.3937 24.4174 51.9051 27.3477 51.661 32.1618C51.5913 33.627 51.5099 34.8596 51.4867 34.9061C51.4518 34.941 51.0334 34.8944 50.5336 34.8014C49.72 34.6502 49.5689 34.6502 48.9878 34.813C48.2206 35.034 47.4535 35.6619 47.1164 36.3131C46.7794 36.9759 42.2348 57.3137 42.2348 58.1742C42.2348 58.9417 42.4324 59.465 42.9322 60.0464C43.5366 60.7208 43.9782 60.9185 45.8844 61.3487C48.023 61.8255 49.0226 61.872 49.7549 61.5115C50.2198 61.2906 50.9869 60.5697 51.0915 60.2557C51.138 60.1394 51.4402 60.1743 52.37 60.372C53.8462 60.6743 54.3925 60.6278 55.2758 60.0929C56.4149 59.4068 56.3684 59.5812 58.3791 50.674C60.3783 41.8016 60.4364 41.4412 59.9018 40.4179C59.6344 39.9062 59.1114 39.3946 58.4605 39.0225C58.2862 38.9178 58.2745 38.7899 58.3908 37.6271C58.8441 32.906 58.8557 27.8826 58.4024 25.3593C56.5543 14.9054 48.8367 6.41681 38.4689 3.41672C35.9467 2.69576 34.0638 2.42831 31.0302 2.3818C29.2402 2.35854 27.9617 2.39343 27.1365 2.50971ZM33.9592 4.02139C44.1991 5.35864 52.6722 12.1844 55.9267 21.6964C57.3098 25.7895 57.5655 29.3012 56.996 36.5224C56.8333 38.6039 56.8333 38.6039 56.3451 38.4759C56.0197 38.3945 55.9616 38.3248 55.9616 38.0341C55.9616 37.0922 54.9271 35.8596 53.8578 35.5456C53.5207 35.441 53.172 35.3596 53.0907 35.3596C52.9628 35.3596 52.9396 35.2084 52.9861 34.6851C53.1488 32.906 53.1837 32.2199 53.172 30.0687C53.172 28.5803 53.1139 27.3244 52.9977 26.5919C52.4514 23.022 51.0334 19.58 48.9064 16.6962C47.8719 15.3008 45.3497 12.8124 43.9899 11.8472C40.8749 9.63784 37.4461 8.26571 33.7267 7.74244C32.146 7.5215 28.9962 7.5215 27.3573 7.75406C17.8962 9.06806 10.1669 16.2194 8.31883 25.3244C7.81904 27.7663 7.76092 29.4989 8.03988 34.1037C8.09799 35.1619 8.08637 35.3596 7.93527 35.3596C7.84228 35.3596 7.50522 35.441 7.17977 35.534C6.12208 35.848 5.05276 37.0922 5.05276 38.0224C5.05276 38.3597 4.89004 38.4992 4.48323 38.4992C4.30889 38.4992 4.2624 38.3597 4.20428 37.7782C3.97182 35.4526 3.85559 32.9874 3.84397 30.4176C3.83234 27.2082 3.9602 26.1267 4.61109 23.5569C6.77297 15.1148 13.3748 8.06802 21.8015 5.24236C23.6496 4.62606 26.0207 4.10278 27.8339 3.92836C29.0543 3.80045 32.7155 3.85859 33.9592 4.02139ZM11.9917 36.4061C12.2009 36.5224 12.445 36.7433 12.538 36.8945C12.631 37.0457 13.7584 41.9063 15.0602 47.6972L17.408 58.2324L17.1872 58.6742C17.071 58.9184 16.8385 59.2208 16.6758 59.3371C16.269 59.6278 12.7821 60.3952 12.2823 60.3022C12.0731 60.2673 11.736 60.0929 11.5384 59.9068C11.1316 59.5464 11.3757 60.558 8.13286 45.9878L6.41265 38.2899L6.63349 37.848C6.76134 37.6038 6.98218 37.3131 7.1449 37.1968C7.43548 36.9875 10.6318 36.1968 11.2711 36.1852C11.4687 36.1735 11.7825 36.2782 11.9917 36.4061ZM51.754 36.5805C52.7536 36.8015 53.7067 37.0806 53.8694 37.1968C54.0321 37.3131 54.253 37.6038 54.3808 37.848L54.6017 38.2899L52.8931 45.9297C49.5457 60.9418 49.8827 59.5464 49.4759 59.9068C49.2783 60.0813 48.9413 60.2673 48.732 60.3022C48.2323 60.3952 44.7453 59.6278 44.3385 59.3371C44.1758 59.2208 43.9434 58.9184 43.8271 58.6742L43.6063 58.2324L45.9541 47.6972C47.2559 41.9063 48.3834 37.0457 48.4763 36.8945C48.6972 36.5573 49.3132 36.1735 49.6619 36.1735C49.813 36.1735 50.7544 36.3596 51.754 36.5805ZM5.32009 40.2086C5.35496 40.3946 6.2848 44.5343 7.37736 49.4298C8.46993 54.3253 9.37652 58.4068 9.38815 58.4998C9.41139 58.6742 8.12124 59.058 7.40061 59.0696C6.8892 59.0812 6.2848 58.7905 6.04072 58.4184C5.8315 58.1045 2.26324 42.3482 2.26324 41.7435C2.26324 41.29 2.62355 40.6853 3.00711 40.4876C3.25119 40.3481 4.76219 39.9411 5.1225 39.9062C5.19224 39.8946 5.28522 40.0341 5.32009 40.2086ZM56.8682 40.1272C57.4028 40.2551 57.9491 40.4411 58.0769 40.5341C58.4605 40.79 58.7511 41.3132 58.7511 41.7319C58.7511 42.3249 55.1828 58.1045 54.9736 58.4184C54.7295 58.7905 54.1251 59.0812 53.6137 59.0696C52.8931 59.058 51.6029 58.6742 51.6262 58.4998C51.6378 58.4068 52.5444 54.3253 53.637 49.4298C54.7295 44.5343 55.6594 40.3946 55.6942 40.2086C55.7291 40.0341 55.7872 39.8946 55.8337 39.8946C55.8686 39.8946 56.3451 39.9992 56.8682 40.1272Z"
        stroke="#8F8F8F"
        stroke-width="0.25"
        mask="url(#path-1-outside-1_309_922)"
      />{" "}
    </svg>
  );
  const tenis = (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_309_949)">
        <path
          d="M42.2 0.199974C40.9375 0.599972 39.95 1.52497 39.5125 2.68747C39.3 3.26247 39.275 3.64997 39.275 5.88748C39.2875 8.12498 39.2625 8.56248 39.025 9.39998C38.5625 11.1125 37.925 12.075 36.7625 12.8625C35.475 13.7375 34.125 14.325 32.625 14.6875C31.3 14.9875 31.1625 14.9625 30.9875 14.3375C30.5875 12.8125 29.2625 10.6 28.1625 9.62498C26.525 8.16248 23.125 7.34998 21.15 7.93748C20.1 8.24998 19.3 9.12498 19.075 10.1875C19.0375 10.3875 18.775 13.45 18.5 16.9875L17.9875 23.4125L13.55 34.1125C11.1125 40 9.03751 44.9125 8.96251 45.025C8.87501 45.1375 7.35001 46.475 5.56251 48C3.77501 49.5125 2.03751 51.075 1.71251 51.475C0.125014 53.375 -0.387486 56.025 0.375014 58.375C0.700014 59.35 1.10001 60.0375 2.31251 61.625C3.70001 63.45 4.43751 63.85 6.63751 63.9625C9.95001 64.1375 13.775 63.325 17.075 61.75C19.45 60.625 16.5625 62.7125 49.2625 38.5375C58.4125 31.7625 58.7 31.55 60.25 29.925C61.55 28.5625 62.45 27.3375 63.125 26C63.9875 24.2875 64.1875 23.175 63.8125 22.1125C63.5375 21.35 63.125 20.8625 62 20C61.4625 19.575 60.7375 18.8875 60.4 18.475C59.8 17.75 59.6 17.425 58.0875 14.6625C56.2375 11.2875 53.625 7.87498 50.6375 4.89997C48.8125 3.08747 46.2125 0.937473 45.3 0.487473C44.3625 0.0249748 43.125 -0.100029 42.2 0.199974ZM44 2.24997C44.9875 2.52497 49.3 6.37498 51.4875 8.93748C53.275 11.025 56.05 14.9875 55.975 15.325C55.95 15.4 55.0375 16.1375 53.9375 16.9625C52.775 17.825 51.8 18.6625 51.6 18.95C51.125 19.6375 50.7375 20.55 50.6375 21.225L50.5625 21.8L49.3125 22.5C44.05 25.4375 40.025 29.5375 37.1125 34.925L36.4375 36.1625L35.0625 36.9875C29.875 40.1375 27.4125 42.25 23.1875 47.1875C17.15 54.2625 10.8125 58.125 5.27501 58.125C4.21251 58.125 2.81251 57.9375 2.52501 57.7625C2.43751 57.7125 2.30001 57.325 2.22501 56.9C1.98751 55.5875 2.45001 53.8875 3.33751 52.8125C3.65001 52.45 9.95001 47 10.4375 46.675C10.575 46.5875 12.9125 45.55 15.625 44.3625C18.4875 43.125 20.9125 41.9875 21.4 41.6625C22.45 40.975 23.475 39.85 24.0375 38.775C24.275 38.3125 26.1125 33.2375 28.1125 27.5125C30.125 21.775 31.775 17.0625 31.7875 17.05C31.8 17.025 32.25 16.925 32.7625 16.8125C34.1125 16.5375 35.3125 16.1125 36.5875 15.45C38.675 14.375 39.85 13.175 40.6 11.35C41.2625 9.74998 41.425 8.72498 41.425 5.91248C41.4375 3.03748 41.475 2.93747 42.5 2.39997C43.1125 2.09998 43.35 2.07497 44 2.24997ZM24.7 10.175C26.15 10.5625 27.1 11.325 27.975 12.7875C28.4125 13.5125 29.025 14.9 28.9375 14.975C28.9125 15 28.425 14.9625 27.8625 14.8875C24.925 14.4875 23.15 14.975 21.475 16.625C21 17.075 20.625 17.375 20.625 17.2875C20.625 16.475 21.1625 10.625 21.25 10.4C21.3125 10.25 21.5 10.0625 21.65 9.99998C22.0125 9.83748 23.8625 9.94998 24.7 10.175ZM28.075 17.0375L29.4625 17.1875L25.9375 27.2625C24 32.8 22.2625 37.6125 22.0625 37.95C21.55 38.825 20.5375 39.7875 19.65 40.2375C19 40.5625 12.0375 43.625 11.9375 43.625C11.925 43.625 12.3625 42.5125 12.925 41.1625L13.95 38.7125L16.95 37.8625C20.1875 36.9375 20.5 36.775 20.5 35.9875C20.5 35.5 20.0125 35 19.5375 35C19.3375 35 18.3 35.25 17.225 35.5625C16.15 35.875 15.2125 36.125 15.1375 36.125C15.075 36.125 15.2625 35.55 15.55 34.85L16.0875 33.5625L17.95 33.0375C21.9375 31.9 22 31.8625 22 31.0625C22 30.5125 21.5375 30 21.0625 30C20.875 30 19.95 30.225 19 30.5C18.05 30.775 17.2375 31 17.2125 31C17.15 31 18.1125 28.6 18.2375 28.475C18.275 28.425 19.3625 28.0875 20.625 27.725C23.175 27.0125 23.5 26.825 23.5 26.075C23.5 25.75 23.4125 25.575 23.1125 25.325C22.9 25.15 22.65 25 22.5375 25C22.3875 25 21.5 25.2375 19.475 25.825C19.3125 25.875 19.3875 25.6125 19.8 24.6125C20.1 23.9125 20.425 23.3 20.5125 23.25C20.6125 23.2 21.5375 22.9125 22.5625 22.625C23.9875 22.2375 24.5 22.0375 24.725 21.8C25.075 21.4125 25.075 20.8875 24.7375 20.45C24.4125 20.025 23.9 20.025 22.525 20.425C21.9625 20.5875 21.5 20.675 21.5 20.6125C21.5 20.2875 22.275 18.85 22.7 18.375C23.975 16.975 25 16.7125 28.075 17.0375ZM59.025 20.175C59.4125 20.6125 60.1625 21.2875 60.6875 21.6875C61.2125 22.075 61.7 22.55 61.7625 22.7375C62.275 24.0375 59.9125 27.65 56.9625 30.1C56.375 30.5875 56 30.8125 55.9625 30.7125C55.925 30.6375 55.225 28.925 54.4 26.925C52.7125 22.8375 52.575 22.4125 52.675 21.7C52.8375 20.6375 53.325 20.0625 55.25 18.625L57.05 17.2875L57.675 18.3375C58.025 18.9125 58.6375 19.7375 59.025 20.175ZM52.55 28.025C53.4375 30.175 54.1625 32 54.175 32.0875C54.1875 32.1625 50.1125 35.25 45.125 38.925C34.7375 46.6125 35.7375 46.1125 36.3125 43.325C37.8625 35.6375 42.5375 29.0375 49.3125 24.9625C50.075 24.5 50.75 24.125 50.8125 24.125C50.8875 24.125 51.6625 25.8875 52.55 28.025ZM35.075 39.775C34.3375 42.3375 33.75 45.375 33.75 46.65C33.75 46.95 33.675 47.2875 33.6 47.4C33.4125 47.625 19.25 58.0875 18.3125 58.6875C16.7125 59.7125 14.5 60.6625 12.5625 61.1625C10.6 61.6625 9.57501 61.8 7.56251 61.8C5.40001 61.8125 5.01251 61.7 4.37501 60.825L3.98751 60.3125L5.83751 60.225C8.01251 60.1375 9.75001 59.7375 11.875 58.8375C16.25 57 20.95 53.225 25.1375 48.1875C27.025 45.9125 28.9125 44.025 30.85 42.4625C32.2875 41.3125 34.8375 39.5125 35.05 39.5C35.1 39.5 35.1125 39.625 35.075 39.775Z"
          fill="#8F8F8F"
        />
        <path
          d="M47.7501 29.3375C47.4501 29.725 47.4501 30.0625 47.7626 31.8125C48.0126 33.2625 48.8501 33.8 49.6376 33.0125C50.0626 32.5875 50.0626 32.55 49.8126 31.0625C49.5001 29.2625 49.3376 29 48.4501 29C48.1251 29 47.9501 29.0875 47.7501 29.3375Z"
          fill="#8F8F8F"
        />
        <path
          d="M43.9 32.125C43.3375 32.3625 43.25 32.9 43.525 34.4375C43.8 36 44.0375 36.375 44.7 36.375C45.275 36.375 45.4875 36.2625 45.7 35.85C45.8625 35.525 45.8625 35.3625 45.6375 34.125C45.35 32.5625 45.2375 32.2875 44.8 32.125C44.425 31.975 44.275 31.975 43.9 32.125Z"
          fill="#8F8F8F"
        />
      </g>
      <defs>
        <clipPath id="clip0_309_949">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  let supreme =
    "https://uploaddeimagens.com.br/images/004/058/816/thumb/supreme.png?1665622252";
  let adidas =
    "https://uploaddeimagens.com.br/images/004/058/813/thumb/90dc1fa5c7c729e7018c5282d02ddbca.png?1665621339";
  let phone =
    "https://uploaddeimagens.com.br/images/004/058/817/thumb/phone1.png?1665622281";
  return (
    <article style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }
    }>
      <p style={estilo}>Coleções de Destaque</p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Card nome="Novo Drop Supreme" imgprod={supreme} />
        <Card nome="Coleção Adidas" imgprod={adidas} />
        <Card nome="Novo Beats Bass" imgprod={phone} />
      </div>
      <div>
        <p style={estilo2}>Coleções de Destaque</p>
        <div style={{ 
         display: "flex",
         justifyContent: "center" }}>
          <Categoria conteudo={camisa} nome="Camisetas" />
          <Categoria conteudo={calca} nome="Calças" />
          <Categoria conteudo={calca} nome="Bonés" />
          <Categoria conteudo={headphone} nome="Headphones" />
          <Categoria conteudo={tenis} nome="Tênis" />
        </div>
      </div>
    </article>
  );
}
