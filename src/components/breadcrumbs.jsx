//import { FaChevronRight } from "react-icons/fa";
// react-iconsをインストールする!

export default function BreadCrumbs({ lists }) {
  if(!lists){ 
    return('')
  }
  
  return (
    <ol className="flex font-bold overflow-x-auto whitespace-nowrap" aria-label="breadcrumb">
      {lists.map(({ string, path }, index) => (
          <li className="flex items-center" key={index}>
            {lists.length - 1 !== index 
              ?
              <>
                <a className="text-gray-900 text-sm md:text-base underline" href={path}>{string}</a>
                <FaChevronRight aria-hidden="true" className="text-xs mx-2"/>
              </>
              : <span className="text-sm md:text-base" aria-current="page">{string}</span>
            }
          </li>
      ))}
    </ol>
  );
}