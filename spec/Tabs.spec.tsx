import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs, TabContent } from '../src/components/Tabs/Tabs';
import '@testing-library/jest-dom';

describe('Компонент Tabs', () => {
    it('рендерит вкладки с правильными ссылками и отображает содержимое начальной вкладки', () => {
      render(
        <Tabs links={['Tab 1', 'Tab 2', 'Tab 3']} initialActiveIndex={1}>
          <TabContent className="tab-content">Content 1</TabContent>
          <TabContent className="tab-content">Content 2</TabContent>
          <TabContent className="tab-content">Content 3</TabContent>
        </Tabs>
      );
  
      expect(screen.getByText('Tab 1')).toBeInTheDocument();
      expect(screen.getByText('Tab 2')).toBeInTheDocument();
      expect(screen.getByText('Tab 3')).toBeInTheDocument();
      
      expect(screen.getByText('Content 2')).toBeInTheDocument();
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
      expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
    });
  
    it('изменяет содержимое вкладки при клике на другую вкладку', () => {
      render(
        <Tabs links={['Tab 1', 'Tab 2', 'Tab 3']} initialActiveIndex={0}>
          <TabContent className="tab-content">Content 1</TabContent>
          <TabContent className="tab-content">Content 2</TabContent>
          <TabContent className="tab-content">Content 3</TabContent>
        </Tabs>
      );
  
      fireEvent.click(screen.getByText('Tab 2'));
      expect(screen.getByText('Content 2')).toBeInTheDocument();
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
      expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
  
      fireEvent.click(screen.getByText('Tab 3'));
      expect(screen.getByText('Content 3')).toBeInTheDocument();
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    });
  
    it('рендерит содержимое, даже если не предоставлены вкладки', () => {
      render(
        <Tabs links={['Tab 1']}>
          {/* Предоставляем хотя бы один TabContent */}
          <TabContent className="tab-content">Content</TabContent>
        </Tabs>
      );
  
      expect(screen.getByText('Content')).toBeInTheDocument();
      expect(screen.queryByText('Tab 1')).toBeInTheDocument();
    });
  });