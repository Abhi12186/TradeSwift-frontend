import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250"}}>
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="320"
            height="120"
            viewBox="0 0 320 120"
          >
            <rect x="10" y="50" width="10" height="30" fill="#0073e6" />
            <rect x="30" y="40" width="10" height="40" fill="#0073e6" />
            <rect x="50" y="30" width="10" height="50" fill="#0073e6" />

            <path
              d="M 10 70 Q 35 40, 75 20"
              fill="none"
              stroke="#2B2B2B"
              stroke-width="4"
            />
            <polygon points="72,18 85,25 75,27" fill="#2B2B2B" />

            <text
              x="100"
              y="60"
              font-family="Segoe UI, sans-serif"
              font-size="32"
              fill="#2B2B2B"
              font-weight="600"
            >
              Trade
            </text>
            <text
              x="180"
              y="60"
              font-family="Segoe UI, sans-serif"
              font-size="32"
              fill="#0073e6"
              font-weight="500"
            >
              Swift
            </text>

            <text x="100" y="80" font-size="12" font-family="Arial" fill="#999">
              © 2010 - 2025, TradeSwift Pvt. Ltd.
            </text>
            <text x="100" y="95" font-size="12" font-family="Arial" fill="#999">
              All rights reserved.
            </text>
          </svg>
        </div>
        <div className="col nav-link">
          <p style={{color: "#000", fontWeight: "500"}}>Company</p>
          <a href="" style={{ textDecoration: "none" }}>About</a> <br />
          <a href="" style={{ textDecoration: "none" }}>Products</a>
          <br />
          <a href="" style={{ textDecoration: "none" }}>Pricing</a>
          <br />
          <a href="" style={{ textDecoration: "none" }}>About</a>
          <br />
          <a href="" style={{ textDecoration: "none" }}>Products</a>
          <br />
          <a href="" style={{ textDecoration: "none" }}>Pricing</a>
          <br />
          <a href="" style={{ textDecoration: "none" }}>Referral programme</a>
          <br />
          <a href="" style={{ textDecoration: "none" }}>Careers</a>
          <br />
          <a href="" style={{ textDecoration: "none" }}>TradeSwift.tech</a>
          <br />
          <a href="" style={{ textDecoration: "none" }}>TradeSwift cares (CSR)</a>
          <br />
        </div>
        <div className="col nav-link">
          <p style={{color: "#000", fontWeight: "500"}}>Support</p>
          <a href="" style={{ textDecoration: "none" }}>Contact</a> <br />
          <a href="" style={{ textDecoration: "none" }}>Support portal</a> <br />
          <a href="" style={{ textDecoration: "none" }}>T-Connect blog</a> <br />
          <a href="" style={{ textDecoration: "none" }}>List of charges</a> <br />
          <a href="" style={{ textDecoration: "none" }}>Downloads & resources</a> <br />
        </div>
        <div className="col nav-link">
          <p style={{color: "#000", fontWeight: "500"}}>Account</p>
          <a href="" style={{ textDecoration: "none" }}>Open an account</a> <br />
          <a href="" style={{ textDecoration: "none" }}>Fund transfer</a> <br />
          <a href="" style={{ textDecoration: "none" }}>60 day challenge</a> <br />
        </div>
      </div>
      <div className="mt-5  text-small text-muted" style={{fontSize: "14px"}}>
      <p>
        TradeSwift Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through TradeSwift
        Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
        through TradeSwift Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
        Registration no.: INZ000038238 Registered Address: TradeSwift Broking
        Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
        J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
        complaints pertaining to securities broking please write to
        complaints@tradeswift.com, for DP related to dp@tradeswift.com. Please
        ensure you carefully read the Risk Disclosure Document as prescribed by
        SEBI | ICF{" "}
      </p>

      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances{" "}
      </p>

      <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

      <p>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>

      <p>
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>

      <p>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of TradeSwift and offering such services, please create a ticket here.
      </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
