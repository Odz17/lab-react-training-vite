import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import NumbersTable from "./components/NumbersTable";
import FaceBook from "./components/FaceBook";
import SignupPage from "./components/SignUpPage";
import RGBColorPicker from "./components/RGBColorPicker";
import SingleColorPicker from "./components/SingleColorPicker";

const App = () => {
  const images = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
  ];

  return (
    <div>
      <h1>Iteration 1 | IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <IdCard
        lastName="Max"
        firstName="Payne"
        gender="male"
        height={180}
        birth={new Date("1988-05-17")}
        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUS3JyQBZP8eaAE-5CkHNkrpJmHzoHhQcDNQ&usqp=CAU"
      />

      <IdCard
        lastName="Kratos"
        firstName="Olympian"
        gender="male"
        height={190}
        birth={new Date("789-08-11")}
        picture="https://i.pinimg.com/474x/61/07/67/610767e002b129169f8e8cba0ab35987.jpg"
      />

      <IdCard
        lastName="Leon"
        firstName="Kennedy"
        gender="male"
        height={185}
        birth={new Date("1988-05-11")}
        picture="https://i.pinimg.com/564x/c5/1f/36/c51f36b79c0bfe0e0b4352114ede0de6.jpg"
      />

      <h1>Iteration 2 | Greetings</h1>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <h1>Iteration 3 | CreditCard</h1>

      <div>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      <h1>Iteration 4 | Rating</h1>

      <div>
        <Rating>{0}</Rating>
        <Rating>{1.49}</Rating>
        <Rating>{1.5}</Rating>
        <Rating>{3}</Rating>
        <Rating>{4}</Rating>
        <Rating>{5}</Rating>
      </div>

      <h1>Iteration 5 | DriverCard</h1>

      <div>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE",
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER",
          }}
        />
      </div>

      <h1>Iteration 6 | LikeButton</h1>

      <div className="app-container">
        <LikeButton />
      </div>

      <h1>Iteration 7 | ClickablePicture</h1>

      <div className="app-container">
        <ClickablePicture img="Ironhack.png" imgClicked="maxence-glasses.png" />
      </div>

      <h1>Iteration 8 | Dice</h1>
      <div>
        <Dice />
      </div>

      <h1>Iteration 9 | Carousel</h1>

      <div>
        <Carousel images={images} />
      </div>

      <h1>Iteration 10 | NumbersTable</h1>
      <div>
        <NumbersTable limit={12} />
      </div>

      <h1>Iteration 11-12 | FaceBook</h1>
      <div>
        <FaceBook />
      </div>

      <h1>Iteration 13 | SignUpPage</h1>
      <div>
        <SignupPage />
      </div>

      <h1>Iteration 14| RGBColorPicker</h1>

      <div>
        <RGBColorPicker />
      </div>
    </div>
  );
};

export default App;
