/* eslint-disable react/prop-types,import/no-unresolved */
import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function Figure({ src, imageSource, name }) {
  return (
      <figure style={{ margin:10 }}>
        <img src={useBaseUrl(src)} alt={name} />
        <figcaption>Source: <a href={imageSource} >{name}</a></figcaption>
      </figure>
  )
}