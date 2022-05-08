import React, { useState } from "react";

import { authService } from "../fbase/fbase";

import "./country.css";
const Country = () => {
  const [code, setCode] = useState("91");
  const [number, setNumber] = useState();
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);
  const [extend, SetExtend] = useState(false);
  const [imgUrl, setImgUrl] = useState(
    "https://catamphetamine.gitlab.io/country-flag-icons/3x2/IN.svg"
  );
  const countryCode = (e) => {
    setCode(e.target.value.slice(2));
    console.log(e.target.value.length);
    setImgUrl(
      `https://catamphetamine.gitlab.io/country-flag-icons/3x2/${e.target.value.slice(
        0,
        2
      )}.svg`
    );
  };

  const genrateRecaptcha = () => {
    const auth = authService.getAuth();
    window.recaptchaVerifier = new authService.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  console.log(number);

  const onClick = () => {
    SetExtend(true);
    genrateRecaptcha();
    let verifier = window.recaptchaVerifier;

    authService
      .signInWithPhoneNumber(authService.getAuth(), "+91" + number, verifier)
      .then((conformationResult) => {
        window.conformationResult = conformationResult;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOtp = (e) => {
    let otp = e.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      let conformationResult = window.conformationResult;
      conformationResult
        .confirm(otp)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="countrySel">
      <select id="" onChange={(e) => countryCode(e)} className="selec">
        <option country="GB" value="GB44" Selected>
          UK (+44)
        </option>
        <option country="US" value="US1">
          USA (+1)
        </option>
        <optgroup label="Other countries">
          <option country="DZ" value="DZ213">
            Algeria (+213)
          </option>
          <option country="AD" value="AD376">
            Andorra (+376)
          </option>
          <option country="AO" value="AO244">
            Angola (+244)
          </option>
          <option country="AI" value="AI1264">
            Anguilla (+1264)
          </option>
          <option country="AG" value="AG1268">
            Antigua &amp; Barbuda (+1268)
          </option>
          <option country="AR" value="AR54">
            Argentina (+54)
          </option>
          <option country="AM" value="AM374">
            Armenia (+374)
          </option>
          <option country="AW" value="AW297">
            Aruba (+297)
          </option>
          <option country="AU" value="AU61">
            Australia (+61)
          </option>
          <option country="AT" value="AT43">
            Austria (+43)
          </option>
          <option country="AZ" value="AZ994">
            Azerbaijan (+994)
          </option>
          <option country="BS" value="BS1242">
            Bahamas (+1242)
          </option>
          <option country="BH" value="BH973">
            Bahrain (+973)
          </option>
          <option country="BD" value="BD880">
            Bangladesh (+880)
          </option>
          <option country="BB" value="BB1246">
            Barbados (+1246)
          </option>
          <option country="BY" value="BY375">
            Belarus (+375)
          </option>
          <option country="BE" value="BE32">
            Belgium (+32)
          </option>
          <option country="BZ" value="BZ501">
            Belize (+501)
          </option>
          <option country="BJ" value="BJ229">
            Benin (+229)
          </option>
          <option country="BM" value="BM1441">
            Bermuda (+1441)
          </option>
          <option country="BT" value="BT975">
            Bhutan (+975)
          </option>
          <option country="BO" value="BO591">
            Bolivia (+591)
          </option>
          <option country="BA" value="BA387">
            Bosnia Herzegovina (+387)
          </option>
          <option country="BW" value="BW267">
            Botswana (+267)
          </option>
          <option country="BR" value="BR55">
            Brazil (+55)
          </option>
          <option country="BN" value="BN673">
            Brunei (+673)
          </option>
          <option country="BG" value="BG359">
            Bulgaria (+359)
          </option>
          <option country="BF" value="BF226">
            Burkina Faso (+226)
          </option>
          <option country="BI" value="BI257">
            Burundi (+257)
          </option>
          <option country="KH" value="KH855">
            Cambodia (+855)
          </option>
          <option country="CM" value="CM237">
            Cameroon (+237)
          </option>
          <option country="CA" value="CA1">
            Canada (+1)
          </option>
          <option country="CV" value="CV238">
            Cape Verde Islands (+238)
          </option>
          <option country="KY" value="KY1345">
            Cayman Islands (+1345)
          </option>
          <option country="CF" value="CF236">
            Central African Republic (+236)
          </option>
          <option country="CL" value="CL56">
            Chile (+56)
          </option>
          <option country="CN" value="CN86">
            China (+86)
          </option>
          <option country="CO" value="CO57">
            Colombia (+57)
          </option>
          <option country="KM" value="KM269">
            Comoros (+269)
          </option>
          <option country="CG" value="CG242">
            Congo (+242)
          </option>
          <option country="CK" value="CK682">
            Cook Islands (+682)
          </option>
          <option country="CR" value="CR506">
            Costa Rica (+506)
          </option>
          <option country="HR" value="HR385">
            Croatia (+385)
          </option>
          <option country="CU" value="CU53">
            Cuba (+53)
          </option>
          <option country="CY" value="CY90392">
            Cyprus North (+90392)
          </option>
          <option country="CY" value="CY357">
            Cyprus South (+357)
          </option>
          <option country="CZ" value="CZ42">
            Czech Republic (+42)
          </option>
          <option country="DK" value="DK45">
            Denmark (+45)
          </option>
          <option country="DJ" value="DJ253">
            Djibouti (+253)
          </option>
          <option country="DM" value="DM1809">
            Dominica (+1809)
          </option>
          <option country="DO" value="DO1809">
            Dominican Republic (+1809)
          </option>
          <option country="EC" value="EC593">
            Ecuador (+593)
          </option>
          <option country="EG" value="EG20">
            Egypt (+20)
          </option>
          <option country="SV" value="SV503">
            El Salvador (+503)
          </option>
          <option country="GQ" value="GQ240">
            Equatorial Guinea (+240)
          </option>
          <option country="ER" value="ER291">
            Eritrea (+291)
          </option>
          <option country="EE" value="EE372">
            Estonia (+372)
          </option>
          <option country="ET" value="ET251">
            Ethiopia (+251)
          </option>
          <option country="FK" value="FK500">
            Falkland Islands (+500)
          </option>
          <option country="FO" value="FO298">
            Faroe Islands (+298)
          </option>
          <option country="FJ" value="FJ679">
            Fiji (+679)
          </option>
          <option country="FI" value="FI358">
            Finland (+358)
          </option>
          <option country="FR" value="FR33">
            France (+33)
          </option>
          <option country="GF" value="GF594">
            French Guiana (+594)
          </option>
          <option country="PF" value="PF689">
            French Polynesia (+689)
          </option>
          <option country="GA" value="GA241">
            Gabon (+241)
          </option>
          <option country="GM" value="GM220">
            Gambia (+220)
          </option>
          <option country="GE" value="GE7880">
            Georgia (+7880)
          </option>
          <option country="DE" value="DE49">
            Germany (+49)
          </option>
          <option country="GH" value="GH233">
            Ghana (+233)
          </option>
          <option country="GI" value="GI350">
            Gibraltar (+350)
          </option>
          <option country="GR" value="GR30">
            Greece (+30)
          </option>
          <option country="GL" value="GL299">
            Greenland (+299)
          </option>
          <option country="GD" value="GD1473">
            Grenada (+1473)
          </option>
          <option country="GP" value="GP590">
            Guadeloupe (+590)
          </option>
          <option country="GU" value="GU671">
            Guam (+671)
          </option>
          <option country="GT" value="GT502">
            Guatemala (+502)
          </option>
          <option country="GN" value="GN224">
            Guinea (+224)
          </option>
          <option country="GW" value="GW245">
            Guinea - Bissau (+245)
          </option>
          <option country="GY" value="GY592">
            Guyana (+592)
          </option>
          <option country="HT" value="HT509">
            Haiti (+509)
          </option>
          <option country="HN" value="HN504">
            Honduras (+504)
          </option>
          <option country="HK" value="HK852">
            Hong Kong (+852)
          </option>
          <option country="HU" value="HU36">
            Hungary (+36)
          </option>
          <option country="IS" value="IS354">
            Iceland (+354)
          </option>
          <option country="IN" value="IN91">
            India (+91)
          </option>
          <option country="ID" value="ID62">
            Indonesia (+62)
          </option>
          <option country="IR" value="IR98">
            Iran (+98)
          </option>
          <option country="IQ" value="IQ964">
            Iraq (+964)
          </option>
          <option country="IE" value="IE353">
            Ireland (+353)
          </option>
          <option country="IL" value="IL972">
            Israel (+972)
          </option>
          <option country="IT" value="IT39">
            Italy (+39)
          </option>
          <option country="JM" value="JM1876">
            Jamaica (+1876)
          </option>
          <option country="JP" value="JP81">
            Japan (+81)
          </option>
          <option country="JO" value="JO962">
            Jordan (+962)
          </option>
          <option country="KZ" value="KZ7">
            Kazakhstan (+7)
          </option>
          <option country="KE" value="KE254">
            Kenya (+254)
          </option>
          <option country="KI" value="KI686">
            Kiribati (+686)
          </option>
          <option country="KP" value="KP850">
            Korea North (+850)
          </option>
          <option country="KR" value="KR82">
            Korea South (+82)
          </option>
          <option country="KW" value="KW965">
            Kuwait (+965)
          </option>
          <option country="KG" value="KG996">
            Kyrgyzstan (+996)
          </option>
          <option country="LA" value="LA856">
            Laos (+856)
          </option>
          <option country="LV" value="LV371">
            Latvia (+371)
          </option>
          <option country="LB" value="LB961">
            Lebanon (+961)
          </option>
          <option country="LS" value="LS266">
            Lesotho (+266)
          </option>
          <option country="LR" value="LR231">
            Liberia (+231)
          </option>
          <option country="LY" value="LY218">
            Libya (+218)
          </option>
          <option country="LI" value="LI417">
            Liechtenstein (+417)
          </option>
          <option country="LT" value="LT370">
            Lithuania (+370)
          </option>
          <option country="LU" value="LU352">
            Luxembourg (+352)
          </option>
          <option country="MO" value="MO853">
            Macao (+853)
          </option>
          <option country="MK" value="MK389">
            Macedonia (+389)
          </option>
          <option country="MG" value="MG261">
            Madagascar (+261)
          </option>
          <option country="MW" value="MW265">
            Malawi (+265)
          </option>
          <option country="MY" value="MY60">
            Malaysia (+60)
          </option>
          <option country="MV" value="MV960">
            Maldives (+960)
          </option>
          <option country="ML" value="ML223">
            Mali (+223)
          </option>
          <option country="MT" value="MT356">
            Malta (+356)
          </option>
          <option country="MH" value="MH692">
            Marshall Islands (+692)
          </option>
          <option country="MQ" value="MQ596">
            Martinique (+596)
          </option>
          <option country="MR" value="MR222">
            Mauritania (+222)
          </option>
          <option country="YT" value="YT269">
            Mayotte (+269)
          </option>
          <option country="MX" value="MX52">
            Mexico (+52)
          </option>
          <option country="FM" value="FM691">
            Micronesia (+691)
          </option>
          <option country="MD" value="MD373">
            Moldova (+373)
          </option>
          <option country="MC" value="MC377">
            Monaco (+377)
          </option>
          <option country="MN" value="MN976">
            Mongolia (+976)
          </option>
          <option country="MS" value="MS1664">
            Montserrat (+1664)
          </option>
          <option country="MA" value="MA212">
            Morocco (+212)
          </option>
          <option country="MZ" value="MZ258">
            Mozambique (+258)
          </option>
          <option country="MN" value="MN95">
            Myanmar (+95)
          </option>
          <option country="NA" value="NA264">
            Namibia (+264)
          </option>
          <option country="NR" value="NR674">
            Nauru (+674)
          </option>
          <option country="NP" value="NP977">
            Nepal (+977)
          </option>
          <option country="NL" value="NL31">
            Netherlands (+31)
          </option>
          <option country="NC" value="NC687">
            New Caledonia (+687)
          </option>
          <option country="NZ" value="NZ64">
            New Zealand (+64)
          </option>
          <option country="NI" value="NI505">
            Nicaragua (+505)
          </option>
          <option country="NE" value="NE227">
            Niger (+227)
          </option>
          <option country="NG" value="NG234">
            Nigeria (+234)
          </option>
          <option country="NU" value="NU683">
            Niue (+683)
          </option>
          <option country="NF" value="NF672">
            Norfolk Islands (+672)
          </option>
          <option country="NP" value="NP670">
            Northern Marianas (+670)
          </option>
          <option country="NO" value="NO47">
            Norway (+47)
          </option>
          <option country="OM" value="OM968">
            Oman (+968)
          </option>
          <option country="PW" value="PW680">
            Palau (+680)
          </option>
          <option country="PA" value="PA507">
            Panama (+507)
          </option>
          <option country="PG" value="PG675">
            Papua New Guinea (+675)
          </option>
          <option country="PY" value="PY595">
            Paraguay (+595)
          </option>
          <option country="PE" value="PE51">
            Peru (+51)
          </option>
          <option country="PH" value="PH63">
            Philippines (+63)
          </option>
          <option country="PL" value="PL48">
            Poland (+48)
          </option>
          <option country="PT" value="PT351">
            Portugal (+351)
          </option>
          <option country="PR" value="PR1787">
            Puerto Rico (+1787)
          </option>
          <option country="QA" value="QA974">
            Qatar (+974)
          </option>
          <option country="RE" value="RE262">
            Reunion (+262)
          </option>
          <option country="RO" value="RO40">
            Romania (+40)
          </option>
          <option country="RU" value="RU7">
            Russia (+7)
          </option>
          <option country="RW" value="RW250">
            Rwanda (+250)
          </option>
          <option country="SM" value="SM378">
            San Marino (+378)
          </option>
          <option country="ST" value="ST239">
            Sao Tome &amp; Principe (+239)
          </option>
          <option country="SA" value="SA966">
            Saudi Arabia (+966)
          </option>
          <option country="SN" value="SN221">
            Senegal (+221)
          </option>
          <option country="CS" value="CS381">
            Serbia (+381)
          </option>
          <option country="SC" value="SC248">
            Seychelles (+248)
          </option>
          <option country="SL" value="SL232">
            Sierra Leone (+232)
          </option>
          <option country="SG" value="SG65">
            Singapore (+65)
          </option>
          <option country="SK" value="SK421">
            Slovak Republic (+421)
          </option>
          <option country="SI" value="SI386">
            Slovenia (+386)
          </option>
          <option country="SB" value="SB677">
            Solomon Islands (+677)
          </option>
          <option country="SO" value="SO252">
            Somalia (+252)
          </option>
          <option country="ZA" value="ZA27">
            South Africa (+27)
          </option>
          <option country="ES" value="ES34">
            Spain (+34)
          </option>
          <option country="LK" value="LK94">
            Sri Lanka (+94)
          </option>
          <option country="SH" value="SH290">
            St. Helena (+290)
          </option>
          <option country="KN" value="KN1869">
            St. Kitts (+1869)
          </option>
          <option country="SC" value="SC1758">
            St. Lucia (+1758)
          </option>
          <option country="SD" value="SD249">
            Sudan (+249)
          </option>
          <option country="SR" value="SR597">
            Suricountry (+597)
          </option>
          <option country="SZ" value="SZ268">
            Swaziland (+268)
          </option>
          <option country="SE" value="SE46">
            Sweden (+46)
          </option>
          <option country="CH" value="CH41">
            Switzerland (+41)
          </option>
          <option country="SI" value="SI963">
            Syria (+963)
          </option>
          <option country="TW" value="TW886">
            Taiwan (+886)
          </option>
          <option country="TJ" value="TJ7">
            Tajikstan (+7)
          </option>
          <option country="TH" value="TH66">
            Thailand (+66)
          </option>
          <option country="TG" value="TG228">
            Togo (+228)
          </option>
          <option country="TO" value="TO676">
            Tonga (+676)
          </option>
          <option country="TT" value="TT1868">
            Trinidad &amp; Tobago (+1868)
          </option>
          <option country="TN" value="TN216">
            Tunisia (+216)
          </option>
          <option country="TR" value="TR90">
            Turkey (+90)
          </option>
          <option country="TM" value="TM7">
            Turkmenistan (+7)
          </option>
          <option country="TM" value="TM993">
            Turkmenistan (+993)
          </option>
          <option country="TC" value="TC1649">
            Turks &amp; Caicos Islands (+1649)
          </option>
          <option country="TV" value="TV688">
            Tuvalu (+688)
          </option>
          <option country="UG" value="UG256">
            Uganda (+256)
          </option>
          <option country="GB" value="GB44">
            UK (+44)
          </option>
          <option country="UA" value="UA380">
            Ukraine (+380)
          </option>
          <option country="AE" value="AE971">
            United Arab Emirates (+971)
          </option>
          <option country="UY" value="UY598">
            Uruguay (+598)
          </option>
          <option country="US" value="US1">
            USA (+1)
          </option>
          <option country="UZ" value="UZ7">
            Uzbekistan (+7)
          </option>
          <option country="VU" value="VU678">
            Vanuatu (+678)
          </option>
          <option country="VA" value="VA379">
            Vatican City (+379)
          </option>
          <option country="VE" value="VE58">
            Venezuela (+58)
          </option>
          <option country="VN" value="VN84">
            Vietnam (+84)
          </option>
          <option country="VG" value="VG84">
            Virgin Islands - British (+1284)
          </option>
          <option country="VI" value="VI84">
            Virgin Islands - US (+1340)
          </option>
          <option country="WF" value="WF681">
            Wallis &amp; Futuna (+681)
          </option>
          <option country="YE" value="YE969">
            Yemen (North)(+969)
          </option>
          <option country="YE" value="YE967">
            Yemen (South)(+967)
          </option>
          <option country="ZM" value="ZM60">
            Zambia (+260)
          </option>
          <option country="ZW" value="ZW263">
            Zimbabwe (+263)
          </option>
        </optgroup>
      </select>
      <div className="form">
        <div className="content">
          <div className="codeFlag">
            <span style={{ width: "90px", fontSize: "80%" }}> +{code}</span>
            <img
              src={imgUrl}
              style={{ width: "30%", marginRight: "8%" }}
              className="imgCount"
            ></img>
          </div>

          <div className="phoneInput">
            <input
              type="number"
              maxLength={10}
              value={number}
              onChange={(e) => onChange(e)}
            ></input>
          </div>
        </div>
        {extend ? (
          <input
            type="text"
            className="butto"
            value={otp}
            onChange={(e) => verifyOtp(e)}
            style={{ width: "30vw" }}
            placeholder="Enter  OTP"
          ></input>
        ) : (
          <button className="butto" onClick={() => onClick()}>
            {" "}
            Login
          </button>
        )}
      </div>

      <div
        id="recaptcha-container"
        className="justify-center flex"
        // style={{ width: "500px", height: "200px" }}
      ></div>
    </div>
  );
};

export default Country;
