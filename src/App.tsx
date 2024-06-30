import styled from "styled-components";

import { useRef, useState } from "react";
import { Iphone } from "./containers";
import { useTranslation } from "react-i18next";

const query = new URLSearchParams(window.location.search);
const urlConfig = {
  appName: query.get("appName") || "",
  iconUrl: query.get("iconUrl") || "",
};

export default function App() {
  const { t } = useTranslation();

  const [appName, setAppName] = useState(urlConfig.appName);
  const [selectedIcon, setSelectedIcon] = useState(urlConfig.iconUrl);

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSelectImage(e: any) {
    const file = e.target.files[0];
    const data = URL.createObjectURL(file);
    setSelectedIcon(data);
  }

  function handleClickToUpload() {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  }

  return (
    <Container>
      {!urlConfig.iconUrl && (
        <SelectAndInputContainer>
          <SelectImageButton onClick={handleClickToUpload}>
            {t("selectTheIcon")}
          </SelectImageButton>
          <HiddenInput
            ref={hiddenFileInput}
            type="file"
            accept="image/*"
            onChange={handleSelectImage}
          />
          <AppNameInput
            placeholder={t("andTellMe")}
            onChange={(e) => setAppName(e.target.value)}
          />
        </SelectAndInputContainer>
      )}
      <Iphone appName={appName} selectedIcon={selectedIcon} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const SelectAndInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SelectImageButton = styled.button`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.thin};
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.backgroundDark};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.white};
    background-color: transparent;
    color: ${(props) => props.theme.colors.white};
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 16px;
  }
`;

const AppNameInput = styled.input`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.thin};
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.white};
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  width: 250px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 16px;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const TitleSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-bottom: 0;
`;
