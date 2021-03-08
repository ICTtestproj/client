import * as React from 'react';

import {Button} from '../../../../../packages/DesignSystem';
import Title from '../SubTitle';
import {ScrapList, ScrapListContainer, ScrapListItem, TitleContainer} from './style';

const ScrapContainer: React.FC = () => {
    return <ScrapListContainer>
        <TitleContainer>
            <Title>나의 스크랩</Title>
            <Button className="btn_setting">전체보기</Button>
        </TitleContainer>
        <ScrapList>
            <ScrapListItem></ScrapListItem>
            <ScrapListItem></ScrapListItem>
            <ScrapListItem></ScrapListItem>
            <ScrapListItem></ScrapListItem>
            <ScrapListItem></ScrapListItem>
            <ScrapListItem></ScrapListItem>
            <ScrapListItem></ScrapListItem>
            <ScrapListItem></ScrapListItem>
            <ScrapListItem></ScrapListItem>
        </ScrapList>
    </ScrapListContainer>
}

export default ScrapContainer