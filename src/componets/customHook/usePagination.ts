import { useMemo } from "react"

export const DOTS = -10;

const range =(start:number,end:number)=>{
    let length = end - start + 1;

    return Array.from({length},(_,i)=>i+start)
}

export default function usePagination({
    totalCount,
    pageSize,
    siblingCount=1,
    currentPage
}:{
    totalCount : number,
    pageSize : number,
    siblingCount : number,
    currentPage : number
}){
    

    const paginationRange = useMemo(()=>{
        const totalPages = Math.ceil(totalCount/pageSize);
        // const startPage = Math.max(1,currentPage - siblingCount);

        const totalPageNumbers = siblingCount +2;


        if(totalPages <= totalPageNumbers){
            return  range(1,totalPages);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount,1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount,totalPages);


        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

        const firstPageIndex = 1;
        // const lastPageIndex = totalPages;

        if(!shouldShowLeftDots && shouldShowRightDots){
            let leftItemCount = 1 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount)
            return [...leftRange, DOTS,totalPages]
        }

        if(shouldShowLeftDots &&  !shouldShowRightDots){
            let rightItemCount = 1 + 2 * siblingCount;
            let rightRange = range(totalPages - rightItemCount + 1,totalPages)
            return [firstPageIndex,DOTS,...rightRange]
        }



        if((shouldShowLeftDots && shouldShowRightDots) || (!shouldShowLeftDots && !shouldShowRightDots)){
            let middleRange = range(leftSiblingIndex,rightSiblingIndex);
            return [firstPageIndex,DOTS,...middleRange,DOTS,totalPages]
        }



    },[totalCount,pageSize,siblingCount,currentPage])


    return paginationRange

}

