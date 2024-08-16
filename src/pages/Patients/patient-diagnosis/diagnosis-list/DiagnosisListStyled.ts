import styled from "styled-components";

export const DiagnosisListContainer = styled.div`
margin-top: 2rem;
background: #FFFFFF;
border-radius: 1rem;
padding: 2rem;
`

export const TableContainer = styled.div`
  max-height: 21rem;
  overflow-y: auto;
  /* Scrollbar width for Firefox */
  scrollbar-width: thin;
  scrollbar-color: #072635 #E3E4E6; /* Thumb color and track color */

  /* Scrollbar for WebKit browsers */
  ::-webkit-scrollbar {
    width: .75rem;
  }

  ::-webkit-scrollbar-button {
    display: none; /* Hide the up and down arrows */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: .625rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: .625rem;
    border: .1875rem solid #f1f1f1;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHeader = styled.thead`
  background-color: #F6F7F8 ;
`;

export const TableRow = styled.tr`
`;

export const TableHeaderCell = styled.th`
  padding: 1rem 2rem;
  &.first{
    border-radius: 1.5rem 0 0 1.5rem;
  }
  &.last{
    border-radius: 0 1.5rem 1.5rem 0;
  }
`;

export const TableCell = styled.td`
  padding: 1rem 2rem;
  &.narrow {
    width: 25%;
  }
  &.wide {
    width: 50%;
  }
`;

// --------------------------------- //
// --------------------------------- //

// export const TableContainer = styled.div`
// `;

// export const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   text-align: left;

//   thead, tbody {
//     display: block;
//   }

//   thead {
//     position: sticky;
//     top: 0;
//     z-index: 1;
//     background-color: #F6F7F8; /* Ensures header background covers the full width */
//   }

//   tbody {
//     display: block;
//     width: 100%;
//       max-height: 21rem;
//     overflow-y: auto;
//     /* Scrollbar width for Firefox */
//     scrollbar-width: thin;
//     scrollbar-color: #072635 #E3E4E6; /* Thumb color and track color */
  
//     /* Scrollbar for WebKit browsers */
//     ::-webkit-scrollbar {
//       width: 0.75rem;
//     }
  
//     ::-webkit-scrollbar-button {
//       display: none; /* Hide the up and down arrows */
//     }
  
//     ::-webkit-scrollbar-track {
//       background: #f1f1f1; 
//       border-radius: 0.625rem;
//     }
  
//     ::-webkit-scrollbar-thumb {
//       background-color: #888; 
//       border-radius: 0.625rem;
//       border: 0.1875rem solid #f1f1f1;
//     }
  
//     ::-webkit-scrollbar-thumb:hover {
//       background: #555; 
//     }
//   }

//   th, td {
//     padding: 1rem 2rem;
//     white-space: nowrap; /* Prevents text from wrapping */
//   }

//   th {
//     text-align: left;
//   }
// `;

// export const TableHeaderCell = styled.th`
//   padding: 1rem 2rem;
//   &.first {
//     border-radius: 1.5rem 0 0 1.5rem;
//   }
//   &.last {
//     border-radius: 0 1.5rem 1.5rem 0;
//   }
// `;

// export const TableRow = styled.tr`
// `;

// export const TableCell = styled.td`
//   padding: 1rem 2rem;
//   &.narrow {
//     width: 25%;
//   }
//   &.wide {
//     width: 50%;
//   }
// `;
