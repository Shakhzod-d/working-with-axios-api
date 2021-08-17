import React from 'react';
import axios from 'axios';
import { CardHeader, Col, Container, Row, Card, CardBody } from 'reactstrap';

class Photos extends React.Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
      const post = res.data;
      console.log(res);
      this.setState({ post });
    });
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            {this.state.post.map((posts) => (
              <Col md="4" key={posts.id}>
                <Card>
                  <CardHeader>
                    <h3>This is title {posts.title}</h3>
                    {`This is url of below img ${posts.url}`} <br />
                    <img src={posts.url} alt="" />
                  </CardHeader>
                  <CardBody>{`This is another picture link ${posts.thumbnailUrl}`}</CardBody>
                  <img src={posts.thumbnailUrl} alt="" />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Photos;
