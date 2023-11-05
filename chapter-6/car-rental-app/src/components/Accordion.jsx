import Accordion from "react-bootstrap/Accordion";

function MyAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
        <Accordion.Body>
          <strong>This is the first item's accordion body.</strong>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non qui
          totam reprehenderit ab libero? Harum quia voluptatibus quas illum
          veniam excepturi nobis nihil, nulla possimus! Cupiditate sit
          blanditiis tenetur culpa!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Berapa hari minimal sewa mobil lepas kunci?
        </Accordion.Header>
        <Accordion.Body>
          <strong>This is the second item's accordion body.</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam
          recusandae, ab mollitia autem pariatur exercitationem itaque natus
          eligendi vitae reprehenderit voluptate, ipsa voluptatibus nisi tenetur
          iusto. Corporis, sequi praesentium!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Berapa hari sebelumnya sebaiknya booking sewa mobil?
        </Accordion.Header>
        <Accordion.Body>
          <strong>This is the third item's accordion body.</strong>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus vitae
          aliquid voluptatem explicabo deserunt. Facilis excepturi earum
          voluptate harum doloremque enim quae a alias. Optio necessitatibus
          fugiat accusamus saepe amet.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Apakah ada biaya antar-jemput?</Accordion.Header>
        <Accordion.Body>
          <strong>This is the fourth item's accordion body.</strong>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          quasi cum placeat, reiciendis esse corrupti sequi voluptatem, impedit
          minus amet ducimus cupiditate ipsum adipisci ipsa, dolorum quos earum
          ea natus!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
        <Accordion.Body>
          <strong>This is the fifth item's accordion body.</strong>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, vel
          a, dolorem doloremque unde assumenda minima sit nemo blanditiis neque
          facere quasi, sunt voluptate fuga minus omnis dolores asperiores
          exercitationem.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordion;
