import "../style/project.css";
import Card from "./ProjectCard";

export default function Project() {
  return (
    <section className="project-section" id="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        <Card
          title="AgeNow App"
          copy="تطبيق بسيط لحساب العمر  باستخدام React و useState."
          backgroundImage="/img/age.jpg"
          link="https://github.com/reem-abdelrazek20/your-age"
        />
        <Card
          title="Shorter Links App"
          copy="تطبيق بسيط لتقصير الروابط باستخدام React و useState."
          backgroundImage="/img/link.jpeg"
          link="link-shortener-black-kappa.vercel.app"
        />
        <Card
          title="web page"
          copy="صفحة ويب ب html css js "
          backgroundImage="/img/web.jpg"
          link="https://web-bage.vercel.app/"
        />
        <Card
          title="mogo"
          copy="تطبيق بسيط متجر الكتروني وهمي  باستخدام React و useState."
          backgroundImage="/img/mogo.jpg"
          link="https://github.com/reem-abdelrazek20/mogo"
        />
        <Card
          title="Mortgage-Calculator App"
          copy="تطبيق لحساب الفائدة ."
          backgroundImage="/img/Mortgage-Calculator.jpg"
          link="https://mortgage-repayment-calculator-pi-one.vercel.app/"
        />
         <Card
          title="Platinum Global Motors"
          copy="صفحة هبوط  ."
          backgroundImage="/img/اimge1.jpg"
          link="https://car-zeta-three.vercel.app/"
        />
      </div>
    </section>
  );
}


