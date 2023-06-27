import { EditorConfig } from 'lexical'
import { FrontmatterEditorProps, JsxEditorProps, SandpackEditorProps, CodeBlockEditorProps, TableEditorProps } from './NodeDecoratorsProps'

export interface NodeDecoratorComponents {
  FrontmatterEditor: React.FC<FrontmatterEditorProps>
  JsxEditor: React.FC<JsxEditorProps>
  SandpackEditor: React.FC<SandpackEditorProps>
  CodeBlockEditor: React.FC<CodeBlockEditorProps>
  TableEditor: React.FC<TableEditorProps>
}

export type ExtendedEditorConfig = EditorConfig & {
  theme: EditorConfig['theme'] & {
    nodeDecoratorComponents: NodeDecoratorComponents
  }
}