import logo from "./logo1.PNG";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="circle-Outline">
          <div className="circle-Animation top-Left"></div>
          <div className="circle-Animation middle-Right"></div>
          <div className="circle-Animation bottom-Left"></div>
          <div className="circle-Animation bottom-Right"></div>
        </div>
        <div className="bgImageContainer">
          <div className="backgroundImage"></div>
        </div>
        {/* <div className="circle-Outline">
          <div className="circle-Animation top-Left"></div>
          <div className="circle-Animation middle-Right"></div>
          <div className="circle-Animation bottom-Left"></div>
        </div> */}
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
            href="https://bbhosted.cuny.edu/bbcswebdav/pid-68569030-dt-content-rid-531494060_1/courses/JJC01_PSY_332_51144_1229_1/JJKingAdolesenceFA22%281%29%281%29.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Psyschology of Adolescence (Textbook)
          </a>

          <a
            className="App-link"
            href="https://learn-us-east-1-prod-fleet02-xythos.content.blackboardcdn.com/61aab133e7df2/22691512?X-Blackboard-Expiration=1665954000000&X-Blackboard-Signature=KP%2B7KaZzAnbs%2Fdz8RYb15OQZQKXy48b20f4yDv%2Fp67g%3D&X-Blackboard-Client-Id=100211&response-cache-control=private%2C%20max-age%3D21600&response-content-disposition=inline%3B%20filename%2A%3DUTF-8%27%27Csci274-02Syllabus1.pdf&response-content-type=application%2Fpdf&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJIMEYCIQDfHu6jvgrOJ%2B1Df92KqNZgJ8EfA7a9V8bKRK%2B0K%2B2F1wIhAOCX%2Biv50ORC8bAQQqMtbWiHlat6J0OCYL%2F2Ni3viEq2KtYECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAhoMNjM1NTY3OTI0MTgzIgzfsk7L9m5fKSDvqXIqqgSWB3bqQ6j9nJRpqtNn3jDdaWS3nRfAtLL2zdGVzjmdpqWVHnEqwqrgeQYuys8uix6M%2Fk1%2FGRvgJoAx8N6nmq0TB%2BMAYXMLyFkwQGwsQlmMszTQgQlrJrQl2XserBCAdOQ3VLdHIdwZM%2Flj1oGeUsBX2jDH0VG%2BMC0WUEK8%2BQMQC5P5cNr8jflHU3iYFr9jAfqSQb%2B8KaV4HS7K6JQF5xMHIqq67iVJm1acWudlocKxh%2BTYhbHHd4Oz8FEJ8HCvRrMYLz1xStIxHEnGOnieTKUxPdmfKHoHo1Nv9OWaxhAYS4rj7RH09ZuotdSIoW1sa2h7hju1SxxAf2in0SPuxEKl9fXeakd6V4AcmvABv9kDz66YY3VkaI5UNLOxk%2FlalMobReCEQsiu8DfLD%2BYUVoh0PcbIAKGjlNIlGCm9GK4QO18IjvPY%2BCpRQItyscb1qj2p9t1FPcaN4n8mGjXSfSsAIEPWD2MgMQ0DWjxkwFl9hDYp2hBoiywkoTEtA0ah%2FZyE0H06fvyqdVSFFCCStQxBGEemTxPuDB0nBjeda9M984rxOMdPCor1lt5xtvj%2FnfvVpPRuF2zXuEtYKm9CXS%2FHW8DtJOQQgnWnroTwQlW4ziYkaHoQOgCHLqk71mJBPInRUimaK3U84u5N8%2B0JbpGVFKydxMoSNKpdF23NVZzkN4LGZuRNW8ZCk2R8CdwonBgwF0nLEGYsF%2BTAoBpGfGgnn1mhr%2FRTx5kKoTD%2Fz7CaBjqoAWdfq8F7sJaEvdTGv2iYb9EoIO%2B4tav3uq5o0sn2edYiojLenMKEi15Bt%2FxaoqH53muEW1NaPbt1wYh%2Bx56waX6bt1AKwY9Sli1XWalv%2BNSM%2B5ow42qe3PoxWaaYxvAxu1ibRtmAWFFNHFxjCiPHPRdWUIjQ5X%2BV1MbAWeUdnMPtx6xQN8bpnbvcii4Dt%2FYR9nWotYeGpflHOrEQHJYj7ZRLbslYwrdf1Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221016T150000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Credential=ASIAZH6WM4PLZWEEQLVD%2F20221016%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fed9bb579860c453965905b054a471116791990ccecaa888ddd0619e8fc7c307"
            target="_blank"
            rel="noopener noreferrer"
          >
            Computer Architecture (Textbook)
          </a>

          <a
            className="App-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSCI - 380
          </a>

          <a
            className="App-link"
            href="http://24.0.255.115/webwork2/CSCI_360_EA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cryptography (WebWork)
          </a>

          <a  className="App-link" href="https://sites.google.com/view/csci-360/"
           target="_blank" rel="noopener noreferrer"> 
          Cryptography (Google Sites) </a>

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
          
        </div>

        {/* footer links */}
        {/* <div className="footer">
          <a
            className="App-link"
            href="https://bbhosted.cuny.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blackboard
          </a>
        </div> */}
      </header>{" "}
      {/* end of header after bb link */}
      <footer>
        <div className="footer">
          <div>Made w/ love and patience </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
