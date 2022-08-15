type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';

type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;