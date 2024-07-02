import styled from "styled-components";
import IphoneFrame from "@/assets/img/iphone_frame.png";
import { FaBatteryHalf, FaWifi, FaSignal } from "react-icons/fa";

interface IphoneInterfaceProps {
  appName?: string | null;
  splashUrl?: string | null;
  selectedIcon?: string | null;
}

export default function Iphone({
  appName,
  selectedIcon,
  splashUrl,
}: IphoneInterfaceProps) {
  const defaultApps = [
    {
      name: "WhatsApp",
      icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f0/cd/f8/f0cdf8f0-74b2-8fe4-b33b-69947f3ff6b1/AppIconCatalystRelease-0-2x_U007euniversal-0-0-0-4-0-0-0-85-220-0.png/230x0w.webp",
    },
    {
      name: "Instagram",
      icon: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-512.png",
    },
    {
      name: "Twitch",
      icon: "https://img.freepik.com/vetores-premium/logotipo-do-twitch_578229-259.jpg?w=2000",
    },
    {
      name: "Twitter",
      icon: "https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png",
    },
    {
      name: "Youtube",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/2048px-YouTube_social_white_square_%282017%29.svg.png",
    },
    {
      name: "Spotify",
      icon: "https://www.freeiconspng.com/uploads/spotify-icon-2.png",
    },
    {
      name: "Netflix",
      icon: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    },
    {
      name: appName,
      icon:
        selectedIcon ||
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/White_square_50%25_transparency.svg/768px-White_square_50%25_transparency.svg.png",
    },
  ];

  function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  return (
    <IphoneFrameContainer>
      <IphoneWallpaper>
        <IphoneWallpaperImage
          src={
            splashUrl ||
            "https://techandall.com/wp-content/uploads/2021/07/ios-15-iPhone-wallpaper-from-ispazio-dark.png"
          }
        />
      </IphoneWallpaper>
      <IphoneFrameImage src={IphoneFrame} />
      {!splashUrl && (
        <IphoneInterface>
          <IphoneTopBar>
            <Time>{getCurrentTime()}</Time>
            <IconsContainer>
              <FaSignal />
              <FaWifi />
              <FaBatteryHalf />
            </IconsContainer>
          </IphoneTopBar>
          <AppIconsContainer>
            {defaultApps.map((app) => (
              <AppIcon>
                <AppIconImage
                  src={app.icon.startsWith("http") ? app.icon : undefined}
                />
                <AppIconName>
                  {app.name?.replace(/(.{30})..+/, "$1...")}
                </AppIconName>
              </AppIcon>
            ))}
          </AppIconsContainer>
          <IphoneBottomBar>
            <AppIconImage src="https://www.ggplaw.co.uk/wp-content/uploads/2020/03/iphone-phone-logo.png" />
            <AppIconImage src="https://i.imgur.com/gEDvfce.png" />
            <AppIconImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/1200px-IMessage_logo.svg.png" />
            <AppIconImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0w5GvI3wmp6uKM3pnzP6FHsrHEsynFAx5Xg&usqp=CAU" />
          </IphoneBottomBar>
        </IphoneInterface>
      )}
    </IphoneFrameContainer>
  );
}

const IphoneFrameContainer = styled.div`
  position: relative;
  width: 100%;
  width: 420px;
  height: 780px;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IphoneFrameImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;

  z-index: 1;
`;

const IphoneWallpaper = styled.div`
  position: absolute;
  max-width: 380px;
  height: 100%;
  object-fit: cover;
`;

const IphoneWallpaperImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 70px;
`;

const IphoneInterface = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 750px;
  top: 15px;
  bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  z-index: 2;
`;

const IphoneTopBar = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const Time = styled.div`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.regular};
  letter-spacing: 1px;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const AppIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin-top: 40px;
  gap: 20px;
`;

const AppIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

const AppIconImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
  image-rendering: crisp-edges;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: #cccccc;

  &:hover {
    opacity: 0.5;
  }
`;

const AppIconName = styled.div`
  font-size: 11px;
  font-family: ${(props) => props.theme.fonts.ultralight};
  margin-top: 10px;
  letter-spacing: 1px;
  color: #fff;
`;

const IphoneBottomBar = styled.div`
  position: absolute;
  align-self: center;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${(props) => props.theme.colors.backgroundDark};
  bottom: 20px;
  border-radius: 20px;

  img {
    width: 45px;
    height: 45px;
  }
`;
