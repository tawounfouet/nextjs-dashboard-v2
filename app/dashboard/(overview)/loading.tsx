// export default function Loading() {
//     return (
//         <div className="flex justify-center items-center h-screen">
//             <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
//         </div>
//     );
// }

import DashboardSkeleton from '@/app/ui/skeletons';
 
export default function Loading() {
  return <DashboardSkeleton />;
}