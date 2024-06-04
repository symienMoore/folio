import { createLazyFileRoute } from '@tanstack/react-router'
import React from 'react';
import App from '../App';
export const Route = createLazyFileRoute('/')({
  component: App
})