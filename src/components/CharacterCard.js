import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  CardImg
} from "reactstrap";

export default function CharacterCard(props) {
  const [singleChar, setSingleChar] = useState();
  useEffect(() => {
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    const getChar = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          // console.log(film);
          setSingleChar(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getChar();
  }, [parseInt(props.match.params.id, 10)]);
  if (!singleChar) {
    return <div>Loading movie information...</div>;
  } else if (singleChar) {
    console.log(singleChar);
    return <OneChar key={singleChar.id} singleChar={singleChar} />;
  }
}

function OneChar({ singleChar }) {
  const { name, image, species } = singleChar;

  console.log(singleChar);
  return (
    <span>
      <Container>
        <Card>
          <CardBody>
            <CardImg
              top
              center
              height='50%'
              width='50%'
              src={image}
              alt={name}
            />
            <CardTitle>
              <Row>
                <Col sm='12' md={{ size: 6, offset: 3 }}>
                  {" "}
                  <h2>{name}</h2>
                  <p>{species}</p>
                </Col>
              </Row>
            </CardTitle>
          </CardBody>
        </Card>
      </Container>
    </span>
  );
}
