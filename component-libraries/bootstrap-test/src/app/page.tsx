import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Blog from "./blog";
import BlogForm from "./blog-form";

import { getEntries } from "@/blog";

export default async function Home() {
  const entries = await getEntries();

  return (
    <main>
      <Container>
        <Row>
          <Col xs={6}>
            <Blog entries={entries} />
          </Col>
          <Col xs={6}>
            <BlogForm />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
