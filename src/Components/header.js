import React from "react";
import logo from "../accset/logo-min.png";
import "../css/header.css";
import imdg from "../accset/pp.png";
import imdga from "../accset/ppa.png";
import imdgb from "../accset/ppb.png";
import imdgc from "../accset/ppc.png";
import imdgd from "../accset/ppd.png";
import logo1 from "../accset/logo_q-min.png";
import logo2 from "../accset/logo_p-min.png";
import logo3 from "../accset/logo-min.png";
import imgS from "../accset/S.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faMap,
  faChartBar,
  faHand,
  faBell,
} from "@fortawesome/free-regular-svg-icons";

import {
  faCheckCircle,
  faTeletype,
  faClipboardCheck,
  faUnlockKeyhole,
  faWindowClose,
  faAppleAlt,
  faLock,
  faAngleRight,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faTelegram,
  faTwitter,
  faDiscord,
  faApple,
  faMedium,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

import {
  img,
  Button,
  Fade,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  NavbarText,
  ButtonGroup,
} from "reactstrap";

export default (props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#17122b",
        }}
      >
        <Nav style={{ backgroundColor: "#b064fe" }}>
          <div class="container-fluid px-5 py-2 ">
            <div class="row gx-4">
              <div class="col-4  gx-4">
                <div
                  class="p-2 border"
                  style={{
                    borderRadius: 200,
                  }}
                >
                  <b class="row">
                    <a href="" class="TheA">
                      <div class="row">
                        <div
                          class="col-1"
                          style={{ textAlign: "end", paddingRight: 0 }}
                        >
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="x"
                            color="white"
                          />
                        </div>
                        <div
                          class="col-11"
                          style={{
                            paddingLeft: 4,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "normal",
                            width: "87%",
                            WebkitLineClamp: 1,
                            textAlign: "start",
                          }}
                        >
                          ContractAddress:Po38bhqnYn9ntEs6GHN5ggggggggggggggggdddddddddđ
                        </div>
                      </div>
                    </a>
                  </b>
                </div>
              </div>

              <div class="col-5" style={{ textAlign: "justify" }}>
                <div
                  class="p-2 border"
                  style={{ borderRadius: 200, color: "white" }}
                >
                  <b>
                    <a href="" class="TheA">
                      <FontAwesomeIcon
                        icon={faClipboardCheck}
                        size="x"
                        color="white"
                        className="flex"
                      />{" "}
                      Add to Bookmark &ensp;
                    </a>
                    <a href="" class="TheA">
                      <FontAwesomeIcon
                        icon={faUnlockKeyhole}
                        size="x"
                        color="white"
                        className="flex"
                      />{" "}
                      parasol.finance &ensp;
                    </a>
                    <a
                      href=""
                      class="TheAB"
                      style={{
                        borderTopLeftRadius: 200,
                        borderBottomLeftRadius: 200,
                        paddingLeft: 7,
                        height: 25,
                        width: "100%",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faWindows}
                        size="x"
                        color="white"
                        className="flex"
                      />{" "}
                      CTRL+D &nbsp;
                    </a>
                    &nbsp;
                    <a
                      href=""
                      class="TheAB"
                      style={{
                        borderTopRightRadius: 200,
                        borderBottomRightRadius: 200,
                        paddingLeft: 10,
                        width: "100%",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faApple}
                        size="x"
                        color="white"
                        className="flex"
                      />{" "}
                      CMD+D &ensp;
                    </a>
                  </b>
                </div>
              </div>

              <div class="col-3">
                <div
                  class="p-2 border"
                  style={{ borderRadius: 200, color: "white" }}
                >
                  <b>
                    <a href="" class="TheA">
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        size="x"
                        color="white"
                        className="flex"
                      />{" "}
                      t.me/parasolfinance|&ensp;Jown Now
                    </a>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </Nav>

        <div
          class="container-fluid"
          style={{
            color: "white",
            marginLeft: "4%",
            paddingTop: 40,
            width: "92%",
            marginRight: "4%",
          }}
        >
          <div class="row">
            <div
              class="col-3 "
              style={{ borderColor: "white", textAlign: "justify" }}
            >
              <img
                src="https://parasol.finance/_next/static/media/parasol-logo-inverted-rgb.b4c85d6b.svg"
                alt="Northern Lights"
                paddingLeft={0}
              />
            </div>

            <div class="col-6">
              <div>
                <Navbar expand="md">
                  <NavbarToggler onClick={function noRefCheckKK() {}} />
                  <Collapse navbar>
                    <Nav className="me-auto" navbar>
                      <NavItem>
                        <NavLink href="/components/" style={{ color: "white" }}>
                          Swap
                        </NavLink>
                      </NavItem>

                      <UncontrolledDropdown
                        inNavbar
                        nav
                        style={{ color: "white", marginLeft: 50 }}
                      >
                        <DropdownToggle caret nav style={{ color: "white" }}>
                          Launchpad
                        </DropdownToggle>
                        <DropdownMenu
                          style={{
                            backgroundColor: "#221736",
                            borderRadius: 20,
                          }}
                        >
                          <DropdownItem
                            style={{
                              color: "white",
                              width: 600,
                              paddingTop: 40,
                            }}
                          >
                            <div class="row">
                              <div
                                class="col-2"
                                style={{ textAlign: "center" }}
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLock}
                                  color="#b064fe"
                                  size="1x"
                                />
                              </div>
                              <div class="col-7">
                                <b>
                                  Upcoming & Live Project<br></br>
                                  All the IDOs running of Parasol Finance
                                </b>
                              </div>
                              <div
                                class="col-2 "
                                style={{
                                  textAlign: "center",
                                  backgroundColor: "#402559",
                                  borderRadius: 5,
                                  paddingTop: 5,
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faHand}
                                  size="1x"
                                  color="#b064fe"
                                />{" "}
                                Claim
                              </div>
                            </div>
                          </DropdownItem>
                          <DropdownItem
                            style={{
                              color: "white",
                              width: 600,
                              paddingTop: 40,
                            }}
                          >
                            <div class="row">
                              <div
                                class="col-2"
                                style={{ textAlign: "center", color: "white" }}
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLock}
                                  color="#b064fe"
                                  size="1x"
                                />
                              </div>
                              <div class="col-8" style={{ color: "white" }}>
                                <b>
                                  NFT Access Keys<br></br>
                                  Our unique tiers system using NFT
                                </b>
                              </div>
                            </div>
                          </DropdownItem>
                          <DropdownItem divider style={{ color: "white" }} />
                          <DropdownItem
                            style={{
                              color: "white",
                              width: 600,
                              paddingTop: 40,
                            }}
                          >
                            <div class="row">
                              <div
                                class="col-2"
                                style={{ textAlign: "center" }}
                              ></div>
                              <div class="col-8" style={{ color: "white" }}>
                                <b>
                                  NFT Access Keys<br></br>
                                  Our unique tiers system using NFT
                                </b>
                              </div>
                            </div>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>

                      <NavItem
                        style={{ color: "white", marginLeft: 40, width: 150 }}
                      >
                        <NavLink href="/components/" style={{ color: "white" }}>
                          NFT Access Keys
                        </NavLink>
                      </NavItem>

                      <UncontrolledDropdown
                        inNavbar
                        nav
                        style={{ color: "white", marginLeft: 40 }}
                      >
                        <DropdownToggle caret nav style={{ color: "white" }}>
                          Tools
                        </DropdownToggle>
                        <DropdownMenu
                          style={{
                            backgroundColor: "#221736",
                            borderRadius: 20,
                          }}
                        >
                          <DropdownItem
                            style={{
                              color: "white",
                              width: 600,
                              paddingTop: 40,
                            }}
                          >
                            <div class="row">
                              <div
                                class="col-2"
                                style={{ textAlign: "center" }}
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLock}
                                  color="#b064fe"
                                  size="1x"
                                />
                              </div>
                              <div class="col-7">
                                <b>
                                  Create SPL Token<br></br>
                                  Create a Solana Token (SPL) in sencond
                                </b>
                              </div>
                            </div>
                          </DropdownItem>
                          <DropdownItem
                            style={{
                              color: "white",
                              width: 600,
                              paddingTop: 40,
                            }}
                          >
                            <div class="row">
                              <div
                                class="col-2"
                                style={{ textAlign: "center", color: "white" }}
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLock}
                                  color="#b064fe"
                                  size="1x"
                                />
                              </div>
                              <div class="col-10" style={{ color: "white" }}>
                                <b>
                                  Airdrop Tool<br></br>
                                  Simplifies the sending of tokens to your
                                  community
                                </b>
                              </div>
                            </div>
                          </DropdownItem>
                          <DropdownItem
                            style={{
                              color: "white",
                              width: 600,
                              paddingTop: 40,
                            }}
                          >
                            <div class="row">
                              <div
                                class="col-2"
                                style={{ textAlign: "center", color: "white" }}
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLock}
                                  color="#b064fe"
                                  size="1x"
                                />
                              </div>
                              <div class="col-10" style={{ color: "white" }}>
                                <b>
                                  NFT Mint & Drop<br></br>
                                  Help you to mint and sends NFTs.
                                </b>
                              </div>
                            </div>
                          </DropdownItem>
                          <DropdownItem
                            style={{
                              color: "white",
                              width: 600,
                              paddingTop: 40,
                            }}
                          >
                            <div class="row">
                              <div
                                class="col-2"
                                style={{ textAlign: "center", color: "white" }}
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLock}
                                  color="#b064fe"
                                  size="1x"
                                />
                              </div>
                              <div class="col-10" style={{ color: "white" }}>
                                <b>
                                  Market Maker<br></br>
                                  Create liquidity and put your coin on the
                                  market
                                </b>
                              </div>
                            </div>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>

                      <UncontrolledDropdown
                        inNavbar
                        nav
                        style={{ color: "white", marginLeft: 40 }}
                      >
                        <DropdownToggle caret nav style={{ color: "white" }}>
                          More
                        </DropdownToggle>
                        <DropdownMenu
                          right
                          style={{
                            backgroundColor: "#221736",
                            borderRadius: 20,
                          }}
                        >
                          <DropdownItem
                            style={{
                              color: "white",
                              width: 400,
                              paddingTop: 40,
                            }}
                          >
                            <div class="row">
                              <div
                                class="col-2"
                                style={{ textAlign: "center" }}
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLock}
                                  color="#b064fe"
                                  size="1x"
                                />
                              </div>
                              <div class="col-7">
                                <b>
                                  Upcoming & Live Project<br></br>
                                  All the IDOs running of Parasol Finance
                                </b>
                              </div>
                            </div>
                          </DropdownItem>
                          <DropdownItem
                            style={{
                              color: "white",
                              width: 600,
                              paddingTop: 40,
                            }}
                          >
                            <div class="row">
                              <div
                                class="col-2"
                                style={{ textAlign: "center", color: "white" }}
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLock}
                                  color="#b064fe"
                                  size="1x"
                                />
                              </div>
                              <div class="col-8" style={{ color: "white" }}>
                                <b>
                                  NFT Access Keys<br></br>
                                  Our unique tiers system using NFT
                                </b>
                              </div>
                            </div>
                          </DropdownItem>
                          <DropdownItem divider style={{ color: "white" }} />
                          <DropdownItem
                            style={{
                              color: "white",
                              width: 600,
                              paddingTop: 40,
                            }}
                          >
                            <div class="row">
                              <div
                                class="col-2"
                                style={{ textAlign: "center" }}
                              ></div>
                              <div class="col-8" style={{ color: "white" }}>
                                <b>
                                  NFT Access Keys<br></br>
                                  Our unique tiers system using NFT
                                </b>
                              </div>
                            </div>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
            </div>

            <div class="col-3 ">
              <div style={{ color: "white", textAlign: "justify" }}>
                <div class="row ">
                  <div class="col-5 p-3">
                    <img
                      src="https://parasol.finance/assets/logos/parasol-logo-mark-full-color-rgb.svg"
                      alt="Northern Lights"
                      width={20}
                      height={20}
                    />
                    &ensp;$0.1000
                  </div>
                  <div class="col-7">
                    <Button
                      style={{
                        width: "100%",
                        height: "80%",
                        textAlign: "start",
                        backgroundColor: "#b064fe",
                        borderRadius: 10,
                      }}
                    >
                      <img
                        src={imgS}
                        alt="Northern Lights"
                        width={20}
                        height={20}
                      />{" "}
                      Connext Wallet
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="container-fluid"
          style={{
            color: "white",
            marginLeft: "4%",
            width: "92%",
            marginRight: "4%",
          }}
        >
          <div class="row" style={{ marginTop: 10, textAlign: "justify" }}>
            <div
              class="col-6 "
              style={{ textAlign: "justify", paddingTop: 30 }}
            >
              <div style={{ marginTop: 20 }}>
                <img src={imgS} alt="Northern Lights" width={40} height={40} />{" "}
                &ensp;Built on Solana Blockchain &ensp;
                <FontAwesomeIcon icon={faAngleRight} size="lg" />
              </div>

              <div
                style={{ marginTop: 20, textAlign: "start" }}
                class="textBig"
              >
                <b>
                  The First Community Governed
                  <span
                    style={{
                      color: "#b064fe",
                      textAlign: "start",
                      position: "relative",
                    }}
                  >
                    IDO Platform
                  </span>
                </b>
              </div>

              <div style={{ marginTop: 30, fontSize: 20 }}>
                <b>
                  Parasol Finance is the first-ever community governed IDO
                  platform built on Solana with the needs of both projects and
                  investors alike. <br />
                  <br />
                  The first launchpad with a NFT allocation system.
                </b>
              </div>
              <div style={{ marginTop: 40, fontSize: 20 }}>
                <Button
                  style={{
                    width: "40%",
                    height: 60,
                    textAlign: "center",
                    backgroundColor: "#b064fe",
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                >
                  <FontAwesomeIcon icon={faLock} /> Browse Upcoming IDOs
                </Button>
                <Button
                  style={{
                    width: "40%",
                    height: 60,
                    textAlign: "center",
                    backgroundColor: "#b064fe",
                    borderRadius: 10,
                  }}
                >
                  <FontAwesomeIcon icon={faLock} /> Buy $PSOL With USDC
                </Button>
              </div>
            </div>
            <div class="col-6 " style={{ height: 800 }}>
              <div class="image">
                <img src={logo1} alt="no find" width={700} height={700}></img>
              </div>
              <div class="image">
                <img src={logo2} alt="no find" width={700} height={700}></img>
              </div>
              <div class="image">
                <img src={logo3} alt="no find" width={700} height={700}></img>
              </div>
            </div>
          </div>

          <div class="row" style={{ textAlign: "justify" }}>
            <span style={{ width: "20%" }}>
              <img src={imdg} alt="no find"></img>
            </span>
            <span style={{ width: "20%" }}>
              <img src={imdga} alt="no find"></img>
            </span>
            <span style={{ width: "20%" }}>
              <img src={imdgb} alt="no find"></img>
            </span>
            <span style={{ width: "20%" }}>
              <img src={imdgc} alt="no find"></img>
            </span>{" "}
            <span style={{ width: "20%" }}>
              <img src={imdgd} alt="no find"></img>
            </span>
          </div>

          <div class="row" style={{ marginTop: 50 }}>
            <div class="col-6 " style={{ textAlign: "justify" }}>
              <h1>
                <b>Upcoming IDOs</b>
              </h1>

              <p>
                We only display IDOs that are featured or have been balloted.
              </p>
            </div>

            <div class="col-6 " style={{ textAlign: "end" }}>
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#B59EE6" }}
                >
                  FILTER BY STATUS
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row" style={{ marginTop: 30, textAlign: "justify" }}>
            <span style={{ width: "32%", marginRight: "2%" }}>
              <Card
                style={{
                  borderRadius: 15,
                  backgroundColor: "#17122b",
                  borderColor: "white",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src="https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-hoa-huong-duong-1.jpg"
                  top
                  width="100%"
                  height={250}
                  style={{ borderRadius: 15 }}
                />
                <CardBody>
                  <CardTitle tag="h3" style={{ paddingTop: 10 }}>
                    MOTS Game&ensp;
                    <FontAwesomeIcon icon={faCheckCircle} color="blueviolet" />
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h5"
                    style={{ paddingTop: 10 }}
                  >
                    MOTS Game is a P2E and NFT mining game developed on the
                    Solana network.
                  </CardSubtitle>

                  <CardText style={{ paddingTop: 20, paddingBottom: 20 }}>
                    <p>
                      Token
                      Price...................................................$0.007USDC
                    </p>
                    <p>
                      {" "}
                      IDO Start
                      Date....................................................5/5/2022{" "}
                    </p>
                    <p>
                      IDO End
                      Date...................................................9/5/2022
                    </p>
                  </CardText>
                  <Button
                    style={{
                      width: "55%",
                      height: 50,
                      marginRight: 5,
                      backgroundColor: "blueviolet",
                      borderRadius: 10,
                    }}
                  >
                    <FontAwesomeIcon icon={faBell} />
                    &ensp; Set a Reminder
                  </Button>
                  <Button
                    style={{
                      width: "35%",
                      height: 50,
                      backgroundColor: "white",
                      color: "blueviolet",
                      borderRadius: 10,
                    }}
                  >
                    More info
                  </Button>
                </CardBody>
                <div class="nhanqc">PUBLISHED</div>
              </Card>
            </span>
            <span style={{ width: "32%", marginRight: "2%" }}>
              <Card
                style={{
                  borderRadius: 15,
                  backgroundColor: "#17122b",
                  borderColor: "white",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                  height={250}
                  style={{ borderRadius: 15 }}
                />
                <CardBody>
                  <CardTitle tag="h3" style={{ paddingTop: 10 }}>
                    Edensol&ensp;
                    <FontAwesomeIcon icon={faCheckCircle} color="blueviolet" />
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h5"
                    style={{ paddingTop: 10 }}
                  >
                    MOTS Game is a P2E and NFT mining game developed on the
                    Solana network.
                  </CardSubtitle>

                  <CardText style={{ paddingTop: 20, paddingBottom: 20 }}>
                    <p>
                      Token
                      Price...................................................$0.007USDC
                    </p>
                    <p>
                      {" "}
                      IDO Start
                      Date....................................................5/5/2022{" "}
                    </p>
                    <p>
                      IDO End
                      Date...................................................9/5/2022
                    </p>
                  </CardText>
                  <Button
                    style={{
                      width: "55%",
                      height: 50,
                      marginRight: 5,
                      backgroundColor: "blueviolet",
                      borderRadius: 10,
                    }}
                  >
                    <FontAwesomeIcon icon={faBell} />
                    &ensp; Set a Reminder
                  </Button>
                  <Button
                    style={{
                      width: "35%",
                      height: 50,
                      backgroundColor: "white",
                      color: "blueviolet",
                      borderRadius: 10,
                    }}
                  >
                    More info
                  </Button>
                </CardBody>
                <div class="nhanqc">PUBLISHED</div>
              </Card>
            </span>
            <span style={{ width: "32%" }}>
              <Card
                style={{
                  borderRadius: 15,
                  backgroundColor: "#17122b",
                  borderColor: "white",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src="https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-hoa-huong-duong-1.jpg"
                  top
                  width="100%"
                  height={250}
                  style={{ borderRadius: 15 }}
                />
                <CardBody>
                  <CardTitle tag="h3" style={{ paddingTop: 10 }}>
                    Alf Protocol&ensp;
                    <FontAwesomeIcon icon={faCheckCircle} color="blueviolet" />
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h5"
                    style={{ paddingTop: 10 }}
                  >
                    MOTS Game is a P2E and NFT mining game developed on the
                    Solana network.
                  </CardSubtitle>

                  <CardText style={{ paddingTop: 20, paddingBottom: 20 }}>
                    <p>
                      Token
                      Price...................................................$0.007USDC
                    </p>
                    <p>
                      {" "}
                      IDO Start
                      Date....................................................5/5/2022{" "}
                    </p>
                    <p>
                      IDO End
                      Date...................................................9/5/2022
                    </p>
                  </CardText>
                  <Button
                    style={{
                      width: "55%",
                      height: 50,
                      marginRight: 5,
                      backgroundColor: "blueviolet",
                      borderRadius: 10,
                    }}
                  >
                    <FontAwesomeIcon icon={faBell} />
                    &ensp; Set a Reminder
                  </Button>
                  <Button
                    style={{
                      width: "35%",
                      height: 50,
                      backgroundColor: "white",
                      color: "blueviolet",
                      borderRadius: 10,
                    }}
                  >
                    More info
                  </Button>
                </CardBody>
                <div class="nhanqc">PUBLISHED</div>
              </Card>
            </span>
          </div>

          <div style={{ marginTop: 60 }}>
            <Button
              style={{
                width: 200,
                height: 60,
                textAlign: "center",
                backgroundColor: "#17122b",
                borderRadius: 10,
              }}
            >
              View All Project &ensp;
              <FontAwesomeIcon icon={faAnglesRight} />
            </Button>
          </div>

          <div class="row" style={{ marginTop: 70 }}>
            <div class="col-4  " style={{ textAlign: "justify" }}>
              <img
                src="https://parasol.finance/_next/static/media/parasol-logo-inverted-rgb.b4c85d6b.svg"
                alt="Northern Lights"
              />
              <br></br>
              <br></br>
              <p>
                Parasol Finance is the first-ever community governed IDO
                platform built on Solana with the needs of both projects and
                investors alike.
              </p>
              <br></br>
              <span style={{ marginRight: 25 }}>
                <FontAwesomeIcon icon={faGithub} size="xl" color="white" />
              </span>
              <span style={{ marginRight: 25 }}>
                <FontAwesomeIcon icon={faTwitter} size="xl" color="white" />
              </span>
              <span style={{ marginRight: 25 }}>
                <FontAwesomeIcon icon={faPaperPlane} size="xl" color="white" />
              </span>
              <span style={{ marginRight: 25 }}>
                <FontAwesomeIcon icon={faDiscord} size="xl" color="white" />
              </span>
              <span style={{ marginRight: 25 }}>
                <FontAwesomeIcon icon={faMap} size="xl" color="white" />
              </span>
            </div>
            <div class="col-2" style={{ textAlign: "end", color: "white" }}>
              <p>
                <b>PARASOL FINANCE</b>
              </p>
              <p>About Parasol </p>
              <p>Documentation</p>
              <p>Github Organization</p>
              <p>Token Address</p>
            </div>

            <div class="col-2 " style={{ textAlign: "end", color: "white" }}>
              <p>
                <b>USEFUL LINKS</b>
              </p>
              <p>Apply for IDO</p>
              <p>WhitePaper</p>
              <p>Press Kit</p>
              <p>Tiers System</p>
            </div>

            <div class="col-2 " style={{ textAlign: "end", color: "white" }}>
              <p>
                <b>SOCIAL LINKS</b>
              </p>
              <p>Twitter </p>
              <p>Telegram</p>
              <p>Discord</p>
              <p>Medium</p>
            </div>

            <div class="col-2 " style={{ textAlign: "end", color: "white" }}>
              <p>
                <b>LEGAL</b>
              </p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div class="row" style={{ marginTop: 50, paddingBottom: 100 }}>
            <div class="col-6 " style={{ textAlign: "justify" }}>
              Copyright © 2022 Parasol Finance. All rights reserved.
            </div>
            <div class="col-6 " style={{ textAlign: "end" }}>
              Build with in Europe | Official GitHub | Crafted by Clint ⚡️
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
