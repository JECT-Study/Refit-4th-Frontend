// 제안 수락 mutation. 성공 시 제안 상세 invalidate(ACCEPTED 반영). 합의서 링크는 STOMP로 도착.

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { exhibitionStatusListKey } from "@/hooks/useExhibitions";
import { acceptProposal } from "@/services/proposalApi";
import type { AcceptProposalResult } from "@/types/proposal";

export function useAcceptProposal() {
  const queryClient = useQueryClient();

  return useMutation<AcceptProposalResult, Error, number>({
    mutationFn: id => acceptProposal(id),
    // 수락 시 전시/동의서가 생성되고, 같은 방 다른 제안도 EXPIRED 된다.
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["proposal"] });
      void queryClient.invalidateQueries({ queryKey: exhibitionStatusListKey() });
    },
  });
}
