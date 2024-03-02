import React from "react";
import styled from "styled-components";

import { TTag } from "@/lib/types";

type Props = {
  tags: TTag[];
};

function Tags({ tags }: Props) {
  return (
    <Container>
      {tags.map((item) => (
        <TagContainer key={item.id}>
          <TagName>{item.name}</TagName>
        </TagContainer>
      ))}
    </Container>
  );
}

export default Tags;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TagContainer = styled.div`
  margin-top: 12px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #eaeefa;
`;

const TagName = styled.span`
  color: #325ad2;
  font-size: 16px;
`;
