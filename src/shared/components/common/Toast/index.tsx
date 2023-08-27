import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';

const ToastifyProvider: React.FC = () => <ToastContainer transition={Slide} autoClose={2000} />;
export default ToastifyProvider;
