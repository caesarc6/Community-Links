import logo from "./logo1.PNG";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bgImageContainer">
          <div className="backgroundImage"></div>
        </div>
        <div className="circle-Outline">
          <div className="circle-Animation top-Left"></div>
          <div className="circle-Animation middle-Right"></div>
          <div className="circle-Animation bottom-Left"></div>
        </div>
        <div className="logoPicture">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="descriptionBox">Community Links</div>

        <div className="cards">
          <a
            className="App-link"
            href="https://account.cengage.com/login?SAMLRequest=fZJba%2BMwEEb%2FitG7L5IvSUScEjYUAm1YemPZNyFPXLH2yNXISfPvV3Wa0j60TwIxc76PIy2vXvsuOoAjY7FmPMlYBKhtY7Ct2ePDdTxnV6slqb4Tg1yP%2Fhnv4GUE8tGaCJwPa78s0tiDuwd3MBoe725q9uz9QDJNVdhINGCrWki07VMim060NLNKVOWc75F2f8pdu87LGYs2AW1Q%2BanOB0VrO6L%2FAupsa5BF19ZpmHrVbK86AhZtNzUzTVGKvChmRb4oM1HxGQ9HschnizxMEI2wRfIKfc1EJkTMs5hXD1klCyGLLJlX%2FC%2BLni5exJuXYApJnlXUbHQorSJDElUPJL2W9%2BvbGxlG5eCst9p27N2cnALdZ8LPAHVxy1YXB8fjMbH%2FvDpbnAzSWXgc4g6mAZfScMCmB1QnO7j2RTWnxi%2FTzxU%2BnnIXMreb37Yz%2BvQmsVf%2B%2B0o84dONaeL9NCpHpAG02RtoWLp6z%2Fj6QVb%2FAQ%3D%3D&RelayState=%252Foauth2%252Fv1%252Fauthorize%252Fredirect%253Fokta_key%253DI2uYfguZSCyDimwSG7NvAcaBSMZGbAMFl_qut4OOpLU&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=J8gDiC2CfvQsdY74EQ61EbJyHFsUxfUPzFnqK%2FUzVr6DK23rDHuChu4uVC2r9TKVWqDmJe0G7kCiFwtPOXmmtOwjmA%2B5fGH2Tj2gjawM0t7YEAgFkD5%2B6O9cAjol9VmGJldzXJZ8RkRmobOraFpYU0RmGpfB2PNgQmGH9gqDEQdu%2F0CIKq3y68emmlkDtyZQK5YDVIeHD2NzmRgWchFKhigwqkzkysLrDphUyYPRqSF%2FkZDu%2FsyZTaYrvRZrK4nwbTgXQl4QWJv%2Fmm3eV6FYCkWhJE7NWKOU37edSX%2Fd1HuQaZIZXgryMbJAoLAvSFxZGwLqmR32P2BPHThRKBl7vA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Probabilty & Statistics (Cenage/WebAssign)
          </a>

          <a
            className="App-link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Psyschology of Adolescence (Textbook)
          </a>

          <a
            className="App-link"
            href="http://24.0.255.115/webwork2/CSCI_360_EA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Computer Architecture (Textbook)
          </a>

          <a
            className="App-link"
            href="http://24.0.255.115/webwork2/CSCI_360_EA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSCI - 380 (WebWork)
          </a>

          <a
            className="App-link"
            href="http://24.0.255.115/webwork2/CSCI_360_EA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cryptography (WebWork)
          </a>
        </div>

        {/* footer links */}
        <div className="footer">
          <a
            className="App-link"
            href="https://bbhosted.cuny.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blackboard
          </a>
        </div>
      </header>
      <footer>
        <div className="footer">
          <div>Made w/ love and patience </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
