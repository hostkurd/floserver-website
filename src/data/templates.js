// The New project templates, as FloServer 0.9.1 shows them. Copied from
// tools/manifest-tool/templates.json in hostkurd/floserver (English title,
// description, chips and the mark's colours); update both together.
export const templates = [
  { id: 'php-app', title: 'PHP app', description: 'An empty PHP project with a public folder', chips: ['PHP', 'nginx'], mark: 'php', bg: '#E8EAF6', fg: '#3949AB' },
  { id: 'flocms', title: 'FloCMS', description: 'A FloCMS site; opens in FloCMS Studio', chips: ['PHP', 'MariaDB', 'Composer'], mark: 'Flo', bg: '#0F6CBD', fg: '#FFFFFF' },
  { id: 'laravel', title: 'Laravel', description: 'A new Laravel app through Composer', chips: ['PHP', 'MariaDB', 'Composer'], mark: 'L', bg: '#FDECEA', fg: '#B3261E' },
  { id: 'wordpress', title: 'WordPress', description: 'Latest WordPress with its database ready', chips: ['PHP', 'MariaDB', 'Apache'], mark: 'W', bg: '#E3F2FD', fg: '#1565C0' },
  { id: 'node-app', title: 'Node app', description: 'A Node.js project; its dev server runs behind the project address', chips: ['Node.js'], mark: 'JS', bg: '#E8F5E9', fg: '#2E7D32' },
  { id: 'python-app', title: 'Python app', description: 'A Python project with its own .venv, served at the project address', chips: ['Python', 'pip'], mark: 'Py', bg: '#E6EEF7', fg: '#2F5F8F' },
  { id: 'static-site', title: 'Static site', description: 'HTML, CSS and JavaScript files served as they are', chips: ['nginx'], mark: '</>', bg: '#FFF3E0', fg: '#A85A00' },
  { id: 'database-only', title: 'Database only', description: 'A database and user, no website', chips: ['MariaDB'], mark: 'DB', bg: '#F3E5F5', fg: '#7B1FA2' },
  { id: 'mcp-python', title: 'MCP server (Python)', description: 'An MCP server for AI tools: FastAPI and the official SDK', chips: ['Python', 'pip', 'MCP'], mark: 'MCP', bg: '#E0F2F1', fg: '#00695C' },
  { id: 'mcp-php', title: 'MCP server (PHP)', description: 'An MCP server for AI tools with the official PHP SDK', chips: ['PHP', 'Composer', 'MCP'], mark: 'MCP', bg: '#E0F2F1', fg: '#00695C' },
];
