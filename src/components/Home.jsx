import React, { useState, useRef } from "react";
import AudioPlayer from "./AudioPlayer";
import { Layout, Menu } from "antd";
import Biblioteca from "./Biblioteca";

const { Header, Content, Footer } = Layout;

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleRewind = () => {
    audioRef.current.currentTime -= 10;
  };

  const handleForward = () => {
    audioRef.current.currentTime += 10;
  };

  return (
    <Layout>
      <Header className="bg-dark-cyan">
        <div className="flex justify-between bg-dark-cyan items-center">
          <div className="text-black  font-bold text-xl">Mi Reproductor</div>
          <Menu
          className="bg-green-800 text-white"
            
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">Inicio</Menu.Item>
            <Menu.Item key="2">Biblioteca</Menu.Item>
            <Menu.Item key="3">Acerca de</Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content className="bg-gray-800 text-white min-h-screen">
        <Biblioteca />
        <AudioPlayer
          handlePlay={handlePlay}
          handlePause={handlePause}
          handleStop={handleStop}
          handleRewind={handleRewind}
          handleForward={handleForward}
          isPlaying={isPlaying}
          audioRef={audioRef}
        />
      <Footer className="bg-dark-cyan" style={{ textAlign: "center" }}>
        Mi Reproductor ©{new Date().getFullYear()} Hecho por mi
      </Footer>
      </Content>
    </Layout>
  );
  }

export default Home;

