import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Collapsible from '../components/Collapsible';
import SubTitle from '../components/SubTitle';
import Image from '../components/Image';
import NotFound from '../components/NotFound';
import { API, Method } from '../components/Spacer';
import { H2, H3, H4 } from '../components/Headings';


//TODO: custom elements should be removed from rendering
export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map our custom components to the global scope
  collapsible: Collapsible,
  subtitle: SubTitle,
  image: Image,
  notfound: NotFound,
  api: API,
  method: Method,
  intro: ({ children }) => children,
  h3: H3,
  h4: H4,
  h2: H2,
  // api: ({ children }) => children,
  // method: ({ children }) => children,
  // interface: ({ children }) => children,

};