import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import Terminal from './Terminal';

const Extensibility: React.FC = () => {
  const folderStructureCode = `src/
├── tools/
│   ├── wallet/
│   │   ├── index.ts
│   │   ├── transfer.ts
│   │   └── balance.ts
│   ├── contracts/
│   │   ├── index.ts
│   │   ├── deploy.ts
│   │   └── call.ts
│   └── [YOUR_TOOL_NAME]/
│       ├── index.ts
│       └── actions.ts`;

  const toolSchemaCode = `// src/tools/customTool/index.ts
import { definePlugin } from 'base-mcp';

export default definePlugin({
  name: 'customTool',
  description: 'Custom tool for specialized blockchain actions',
  version: '1.0.0',
  actions: {
    // Action definitions go here
    doSomething: {
      description: 'Performs a custom blockchain action',
      parameters: {
        type: 'object',
        properties: {
          param1: {
            type: 'string',
            description: 'First parameter description'
          },
          param2: {
            type: 'number',
            description: 'Second parameter description'
          }
        },
        required: ['param1']
      },
      async handler(ctx, params) {
        // Implementation logic
        return {
          success: true,
          data: { /* result data */ }
        };
      }
    }
  }
});`;

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-5 pointer-events-none" />
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold tracking-tight mb-2 text-center">
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-shimmer animate-text-shimmer rounded-lg opacity-35 blur-sm"></span>
              <span className="relative z-10">Extensibility for Developers</span>
            </span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            BaseMCP is designed to be extended with custom tools and actions
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimateOnScroll delay={200}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Folder Structure</h3>
              <p className="text-muted-foreground">
                Add your custom tools to the tools directory following this structure:
              </p>
              <Terminal code={folderStructureCode} />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tool Schema</h3>
              <p className="text-muted-foreground">
                Define your tool with actions, parameters, and handlers:
              </p>
              <Terminal code={toolSchemaCode} />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400} className="lg:col-span-2">
            <div className="bg-card rounded-lg border border-muted p-6">
              <h3 className="text-xl font-semibold mb-4">Contributing</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Fork the repository on GitHub</li>
                <li>Create your feature branch</li>
                <li>Add your custom tools following the schema</li>
                <li>Test thoroughly with your AI agents</li>
                <li>Submit a Pull Request with detailed documentation</li>
              </ol>
              <div className="mt-6 p-4 bg-muted rounded-md">
                <p className="text-sm">
                  For more details, see the <a href="https://github.com/base/base-mcp/blob/master/CONTRIBUTING.md" className="text-cyver-cyan hover:underline" target="_blank" rel="noopener noreferrer">CONTRIBUTING.md</a> file in the repository.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Extensibility;
