import React from 'react';
import {BrowseContainer} from '../containers/browse';
import { useContent } from '../hook';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
    // we need the series a films
    //we need slides
    // pass it to the browse container

    const { series } = useContent('series');
    const { films } = useContent('films');

    const slides = selectionFilter({ series, films });
    console.log(slides)
    return (
        <BrowseContainer slides={slides} />
    )
}